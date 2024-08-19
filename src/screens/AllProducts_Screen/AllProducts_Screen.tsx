import { NavBarLayout } from '../../layouts/NavBar_Layout/NavBarLayout'
import { AllProductsLayout } from '../../layouts/AllProducts_Layout/AllProductsLayout'
import { FooterLayout } from '../../layouts/Footer_Layout/FooterLayout'
import { HEADER } from '../HomeScreen/Home_Screen.style'

export const AllProducts_Screen = () => {
  return (
    <>
      <HEADER>
        <NavBarLayout />
      </HEADER>
      <AllProductsLayout />
      <FooterLayout />
    </>
  )
}
