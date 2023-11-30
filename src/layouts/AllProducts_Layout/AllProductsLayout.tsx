import { ProductCard } from "../../components/Product/ProductCard";
import { allWatches } from "../../data/allWatches";
import { ProductGrid, Title } from "./AllProductsLayout.style";


export const AllProductsLayout = () => {
  return (
  <>
    <Title>Products</Title>
        <ProductGrid>
        {
            allWatches.map((watch) => (
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
