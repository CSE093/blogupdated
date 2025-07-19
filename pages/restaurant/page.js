'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { topRestaurants } from '@/data/restaurants';


export default function UpdatePage() {
  const router = useRouter();
  const { id } = router.query;
  const [dish, setDish] = useState(null);
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    desc: '',
  });

  useEffect(() => {
    if (!id) return;

    const localDishes = JSON.parse(localStorage.getItem('topRestaurants')) || topRestaurants;
    const found = localDishes.find((d) => d.id === parseInt(id));
    if (found) {
      setDish(found);
      setForm({
        name: found.name,
        price: found.price,
        image: found.image,
        desc: found.desc || '',
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localDishes = JSON.parse(localStorage.getItem('topRestaurants')) || topRestaurants;
    const updated = localDishes.map((d) =>
      d.id === parseInt(id) ? { ...d, ...form } : d
    );
    localStorage.setItem('topRestaurants', JSON.stringify(updated));
    alert('Dish updated!');
    router.push('/admin'); 
  };

  if (!dish) return <div style={{ padding: '40px' }}>Loading dish info...</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <h2> Update Dish (ID: {id})</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="price"
          placeholder="Price (e.g. ₹199)"
          value={form.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button type="submit" style={btnStyle}>Update Dish</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const btnStyle = {
  padding: '10px 20px',
  backgroundColor: 'orangered',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
