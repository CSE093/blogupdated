import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UpdatePage() {
  const router = useRouter();
  const { id } = router.query;
  const [dish, setDish] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!id) return;

    const stored = localStorage.getItem('topRestaurants');
    const dishes = stored ? JSON.parse(stored) : [];

    const target = dishes.find((d) => d.id === parseInt(id));
    if (target) {
      setDish(target);
      setName(target.name);
      setDesc(target.desc || '');
      setPrice(target.price || '');
      setImage(target.image || '');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDish = {
      ...dish,
      name,
      desc,
      price,
      image,
    };

    const stored = localStorage.getItem('topRestaurants');
    const dishes = stored ? JSON.parse(stored) : [];

    const updatedList = dishes.map((d) => (d.id === updatedDish.id ? updatedDish : d));
    localStorage.setItem('topRestaurants', JSON.stringify(updatedList));

    alert('Dish updated successfully!');
    router.push('/admin');
  };

  if (!dish) return <div style={{ padding: '40px' }}>Loading dish...</div>;

  return (
    <div style={{ padding: '40px' }}>
      <h2>🛠️ Update Dish (ID: {id})</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label><br />
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Price:</label><br />
          <input value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Image URL:</label><br />
          <input value={image} onChange={(e) => setImage(e.target.value)} style={inputStyle} />
        </div>

        <button type="submit" style={btnStyle}>Save Changes</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid gray',
  borderRadius: '4px',
  fontSize: '14px',
};

const btnStyle = {
  padding: '10px 20px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  marginTop: '10px',
};
