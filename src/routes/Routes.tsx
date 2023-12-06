import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { AboutUs_Screen } from '../screens/AboutUs_Screen/AboutUs_Screen'
import { AllProducts_Screen } from '../screens/AllProducts_Screen/AllProducts_Screen'
import { Contact_Screen } from '../screens/Contact_Screen/Contact_Screen'
import { Error404Screen } from '../screens/Error404_Screen/Error404_Screen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { MenuProvider } from '../context/MenuContext'

export const Routes = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <ReactDomRoutes>
            <Route path='/' element={<HomeScreen />} />

            <Route path='/about-us' element={<AboutUs_Screen />} />

            <Route path='/products' element={<AllProducts_Screen />} />

            <Route path='/contact' element={<Contact_Screen />} />

            <Route path="*" element={<Error404Screen />} />
          </ReactDomRoutes>
      </MenuProvider>
    </BrowserRouter>
  )
}
