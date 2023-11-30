import { NavBarLayout } from '../../layouts/NavBar_Layout/NavBarLayout'
import { AllProductsLayout } from '../../layouts/AllProducts_Layout/AllProductsLayout'
import { FooterLayout } from '../../layouts/Footer_Layout/FooterLayout'

export const AllProducts_Screen = () => {
  return (
    <>
        <NavBarLayout />
        <AllProductsLayout />
        <FooterLayout />
    </>
  )
}
