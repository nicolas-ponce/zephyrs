import { SeeAllProductsBtn } from "../../components/Buttons/SeeAllProducts_Button/SeeAllProductsBtn";
import { ProductCard } from "../../components/Product/ProductCard";
import { featuredWatches } from "../../data/featuredWatches";
import { ProductGrid, Title } from "./FeaturedProductsLayout.style";


export const FeaturedProductsLayout = () => {
  return (
    <>
        <Title>Productos destacados</Title>
        <ProductGrid>
        {
            featuredWatches.map((watch) => (
            <ProductCard
                key={watch.id}
                img={watch.img}
                id={watch.id}
                name={watch.name}
                price={watch.price}
                description={watch.description} />))
        }
        </ProductGrid>
        <SeeAllProductsBtn />
    </>
  )
}
