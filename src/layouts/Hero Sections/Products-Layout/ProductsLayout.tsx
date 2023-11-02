import { ProductCard } from "../../../components/Product/ProductCard";
import { watches } from "../../../data/watches";
import { DIV } from "./styles";





export const ProductsLayout = () => {

  return (
    <>
    <DIV>
    {
        watches.map((watch) => (
          <ProductCard
            key={watch.id}
            img={watch.img}
            id={watch.id}
            name={watch.name}
            price={watch.price}
            description={watch.description} />))
      }
    </DIV>

    </>
  );
};
