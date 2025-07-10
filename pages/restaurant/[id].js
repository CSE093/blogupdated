import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { topRestaurants, deliveryRestaurants } from '../../data/restaurants';

export default function RestaurantPage() {
  const router = useRouter();
  const { id } = router.query;
  const all = [...topRestaurants, ...deliveryRestaurants];
  const restaurant = all.find((r) => r.id === parseInt(id));

  if (!restaurant) return <div style={{ padding: '20px' }}>Restaurant not found</div>;

  return (
    <>
      <Navbar />
      <div style={{ padding: '30px' }}>
        <h1 style={{ fontSize: '30px' }}>{restaurant.name}</h1>

        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#ffe8d9',
            borderRadius: '10px',
          }}
        >
          <p>Currently not accepting orders. Back by <b>11:00 AM</b> tomorrow.</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>{restaurant.desc} – {restaurant.price}</p>
          <p style={{ color: 'gray' }}>Closed & not delivering</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '20px' }}>Recommended</h2>
          <ul>
            <li>La Mushroom Pizza – ₹175</li>
            <li>La Capsicum Pizza – ₹125</li>
            <li>La Onion Pizza – ₹120</li>
          </ul>
        </div>
      </div>
    </>
  );
}
