'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { deliveryRestaurants, topRestaurants as defaultTop } from '../data/restaurants';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);

    const localDishes = localStorage.getItem('topRestaurants');
    let finalTop = defaultTop;

    if (localDishes) {
      const addedDishes = JSON.parse(localDishes);
      const isDuplicate = (dish) =>
        defaultTop.some((d) => d.name === dish.name && d.image === dish.image);

      const newDishesOnly = addedDishes.filter((d) => !isDuplicate(d));
      finalTop = [...defaultTop, ...newDishesOnly];
    }

    const merged = [...finalTop, ...deliveryRestaurants];
    setRestaurants(merged);

    const adminFlag = localStorage.getItem('isAdmin');
    setIsAdmin(adminFlag === 'true');
  }, []);

  const handleDelete = (id) => {
    const updated = restaurants.filter((dish) => dish.id !== id);
    setRestaurants(updated);
    localStorage.setItem('topRestaurants', JSON.stringify(updated));
  };

  const handleUpdate = (id) => {
    router.push(`/update/${id}`);
  };

  const handleAdd = () => {
    router.push('/admin');
  };

  if (!hasMounted) return null;

  return (
    <div className="restaurant-list">
      {restaurants.map((r) => (
        <div key={r.id} className="restaurant-card-wrapper">
          <Link href={`/restaurant/${r.id}`}>
            <div className="restaurant-card">
              <Image src={r.image} alt={r.name} width={300} height={200} />
              <h3>{r.name}</h3>
              {r.desc && <p className="desc">{r.desc}</p>}
              {r.price && <p className="price">{r.price}</p>}
              {(r.rating || r.preparationTime) && (
                <p className="extra-info">
                  {r.rating ?? '4.3'} | {r.preparationTime ?? '30 mins'}
                </p>
              )}
            </div>
          </Link>

          {isAdmin && (
            <div className="admin-buttons">
              <button onClick={() => handleUpdate(r.id)} style={btnStyle}>Update</button>
              <button onClick={() => handleDelete(r.id)} style={{ ...btnStyle, backgroundColor: 'crimson' }}>Delete</button>
              <button onClick={handleAdd} style={{ ...btnStyle, backgroundColor: 'green' }}>Add</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const btnStyle = {
  margin: '5px',
  padding: '6px 12px',
  backgroundColor: 'orange',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};

export default RestaurantList;
