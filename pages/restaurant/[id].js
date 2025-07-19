import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { topRestaurants, deliveryRestaurants } from '../../data/restaurants';

export default function FoodDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const all = [...topRestaurants, ...deliveryRestaurants];
  const food = all.find((item) => item.id === parseInt(id));

  if (!food) return <div style={{ padding: '20px' }}>Food item not found</div>;

  return (
    <>
      <Navbar />
      <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
        <h1 style={{ fontSize: '30px', textAlign: 'center', marginBottom: '20px' }}>
          {food.name}
        </h1>

        <div style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
          <Image
            src={food.image}
            alt={food.name}
            width={600}
            height={300}
            style={{ objectFit: 'cover', width: '50', height: '70' }}
          />
        </div>

        <div style={{ background: '#fff4e6', padding: '20px', borderRadius: '10px' }}>
          {food.desc && <p><strong>Description:</strong> {food.desc}</p>}
          {food.price && <p><strong>Price:</strong> {food.price}</p>}
          {food.rating && <p><strong>Rating:</strong> ⭐ {food.rating}</p>}
          {food.preparationTime && <p><strong>Preparation Time:</strong> {food.preparationTime}</p>}
          {!food.desc && <p>This is a popular dish from our top restaurants.</p>}
        </div>
      </div>
    </>
  );
}
