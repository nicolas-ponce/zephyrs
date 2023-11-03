import { MiniProductCard } from "../../../components/MiniProducts/MiniProductCard";
import { watches } from "../../../data/watches";
import { DIV } from "./MiniProductsLayout.style";





export const MiniProductsLayout = () => {

  return (
    <>
    <DIV>
    {
        watches.map((watch) => (
          <MiniProductCard
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
