import React from 'react'
import { NavBarLayout } from '../../layouts/NavBar_Layout/NavBarLayout'
import { FooterLayout } from '../../layouts/Footer_Layout/FooterLayout'
import { ContactLayout } from '../../layouts/Contact_Layout/ContactLayout'

export const Contact_Screen = () => {
  return (
    <>
        <NavBarLayout />
            <ContactLayout />
        <FooterLayout />
    </>
  )
}
