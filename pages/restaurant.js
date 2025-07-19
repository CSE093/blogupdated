

import Navbar from '../components/Navbar';
import { topRestaurants, deliveryRestaurants } from '../data/restaurants';

export default function RestaurantPage() {
  const all = [...topRestaurants, ...deliveryRestaurants];

  return (
    <>
      <Navbar />
      <main style={{ padding: '30px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Restaurant Menu</h1>

        {all.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{
              marginBottom: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '10px',
            }}
          >
            <h2>{restaurant.name}</h2>
            <p>{restaurant.desc} – {restaurant.price}</p>
            <p style={{ color: 'gray' }}>
              {restaurant.rating} ★ | {restaurant.preparationTime}
            </p>
          </div>
        ))}
      </main>
    </>
  );
}
