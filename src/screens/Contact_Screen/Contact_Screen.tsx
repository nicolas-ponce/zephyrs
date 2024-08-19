import { NavBarLayout } from '../../layouts/NavBar_Layout/NavBarLayout'
import { FooterLayout } from '../../layouts/Footer_Layout/FooterLayout'
import { ContactLayout } from '../../layouts/Contact_Layout/ContactLayout'
import { HEADER } from '../HomeScreen/Home_Screen.style'

export const Contact_Screen = () => {
  return (
    <>
      <HEADER>
        <NavBarLayout />
      </HEADER>
      <ContactLayout />
      <FooterLayout />
    </>
  )
}
