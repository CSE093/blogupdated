import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import RestaurantList from '../components/RestaurantList';

export default function UserDashboard() {
  const router = useRouter();
  const handleLogout = () => router.push('/login');

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button
            onClick={handleLogout}
            style={{ padding: '6px 12px', background: '#d9534f', color: 'white' }}
          >
            Logout
          </button>
        </div>

        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
          Top restaurant chains in Noida
        </h2>
        <RestaurantList section="top" />

        <h2 style={{ fontSize: '24px', margin: '30px 0 10px' }}>
          Restaurants with online food delivery in Noida
        </h2>
        <RestaurantList section="delivery" />
      </main>
    </>
  );
}
