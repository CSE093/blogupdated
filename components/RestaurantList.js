import Link from 'next/link';
import { topRestaurants, deliveryRestaurants } from '../data/restaurants';
import './RestaurantList.css';

const RestaurantList = ({ section }) => {
  const data = section === 'top' ? topRestaurants : deliveryRestaurants;

  return (
    <div className="restaurant-list">
      {data.map((r) => (
        <Link href={`/restaurant/${r.id}`} key={r.id}>
          <div className="restaurant-card">
            <img src={r.image} alt={r.name} />
            <h3>{r.name}</h3>

            {r.desc && <p className="desc">{r.desc}</p>}
            {r.price && <p className="price">{r.price}</p>}

           
            {section === 'delivery' && (
              <p className="extra-info">
                 {r.rating ?? '4.3'} | {r.preparationTime ?? '30 mins'}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
