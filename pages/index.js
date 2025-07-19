import Navbar from '../components/Navbar';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
          BLOG
        </h2>
        <RestaurantList section="all" />
      </main>
    </>
  );
}
