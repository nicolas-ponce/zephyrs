import { ProductCard } from "../../components/Product/ProductCard";
import { watches } from "../../data/watches";
import { ProductGrid } from "./ProductsLayout.style";

export const ProductsLayout = () => {
  return (
    <>
        <ProductGrid>
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
        </ProductGrid>
    </>
  )
}
