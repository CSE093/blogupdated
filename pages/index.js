import Navbar from '../components/Navbar';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 40px' }}>
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
