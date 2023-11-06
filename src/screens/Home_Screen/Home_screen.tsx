import { NavBarLayout } from '../../layouts/NavBar_Layout/NavBarLayout'
import { HeroLayout } from '../../layouts/Hero Sections/Hero-Layout/HeroLayout'
import { MiniProductsLayout } from '../../layouts/Hero Sections/Mini-Products-Layout/MiniProductsLayout'
import { ProductsLayout } from '../../layouts/Products_Layout/ProductsLayout'
import { HEADER, MAIN } from './HomeScreen.style'
import { FAQLayout } from '../../layouts/FAQ_Layout/FAQLayout'


export const HomeScreen = () => {
  return (
    <>
      <MAIN>
        <HeroLayout />
        <MiniProductsLayout />
      </MAIN>
      <HEADER>
        <NavBarLayout />
      </HEADER>
      <section>
        <ProductsLayout />
      </section>
      <section>
        <FAQLayout />
      </section>
    </>

  )
}
