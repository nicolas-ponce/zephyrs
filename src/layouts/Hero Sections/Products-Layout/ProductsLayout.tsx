import { ProductCard } from "../../../components/Product/ProductCard";
import { watches } from "../../../data/watches";





export const ProductsLayout = () => {

  return (
    <>
      {
        watches.map((watch) => {
          <ProductCard
            key={watch.id}
            name={watch.name}
            price={watch.price}
            description={watch.description}
            img={watch.img} id={0}
            />
        })
      }

    </>
  );
};
