import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { AboutUs_Screen } from '../screens/AboutUs_Screen/AboutUs_Screen'
import { AllProducts_Screen } from '../screens/AllProducts_Screen/AllProducts_Screen'
import { Home_Screen } from '../screens/Home_Screen/Home_Screen'
import { Contact_Screen } from '../screens/Contact_Screen/Contact_Screen'
import { Error404Screen } from '../screens/Error404_Screen/Error404_Screen'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path='/' element={<Home_Screen />} />

        <Route path='/about-us' element={<AboutUs_Screen />} />

        <Route path='/products' element={<AllProducts_Screen />} />

        <Route path='/contact' element={<Contact_Screen />} />

        <Route path="*" element={<Error404Screen />} />
      </ReactDomRoutes>
    </BrowserRouter>
  )
}
