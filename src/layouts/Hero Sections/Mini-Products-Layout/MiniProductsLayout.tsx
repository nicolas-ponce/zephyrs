import { MiniProductCard } from "../../../components/MiniProducts/MiniProductCard";
import { allWatches } from "../../../data/allWatches";
import { DIV } from "./MiniProductsLayout.style";





export const MiniProductsLayout = () => {

  return (
    <>
    <DIV>
    {
        allWatches.map((watch) => (
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
