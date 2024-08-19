import { AboutUsLayout } from "../../layouts/AboutUs_Layout/AboutUsLayout"
import { FooterLayout } from "../../layouts/Footer_Layout/FooterLayout"
import { NavBarLayout } from "../../layouts/NavBar_Layout/NavBarLayout"
import { HEADER } from "../HomeScreen/Home_Screen.style"


export const AboutUs_Screen = () => {
  return (
    <>
      <HEADER>
        <NavBarLayout />
      </HEADER>
      <AboutUsLayout />
      <FooterLayout />
    </>
  )
}
