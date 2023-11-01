import { Product } from "../../../components/Product/Product";
import watchesData from '../../../data/watches.json';

type TWatches = {
  id: number;
  name: string;
  price: number;
  description: string;
};

interface WatchesData {
  watches: TWatches[];
}

export const ProductsLayout = () => {
  const watchesArray: TWatches[] = (watchesData as WatchesData).watches;

  return (
    <>
      {watchesArray.map((watch) => (
        <Product
          key={watch.id}
          name={watch.name}
          price={watch.price}
          description={watch.description}
          img="hola"
        />
      ))}
    </>
  );
};
