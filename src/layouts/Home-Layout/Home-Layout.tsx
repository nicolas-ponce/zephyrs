import { HeroLayout } from '../Hero Sections/Hero-Layout/HeroLayout'
import { ProductsLayout } from '../Hero Sections/Products-Layout/ProductsLayout'
import { MAIN } from './styles'


export const HomeLayout = () => {
  return (
    <MAIN>
      <HeroLayout />
      <ProductsLayout />
    </MAIN>
  )
}
