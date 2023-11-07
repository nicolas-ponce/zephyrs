import { Button, ShoppingCartImg, Text } from './AddToCartBtn.style'
import shoppingCart from '../../../assets/icons/shopping-cart.png'

export const AddToCartBtn = () => {
  return (
    <Button>
        <ShoppingCartImg src={shoppingCart}></ShoppingCartImg>
        <Text>Add To Cart</Text>
    </Button>
  )
}
