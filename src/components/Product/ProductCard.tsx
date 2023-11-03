import { AddToCartBtn } from '../AddToCart_Button/AddToCartBtn';
import { Description, Name, Price, PriceNBtn, ProductDiv, ProductImg } from './ProductCard.style';

type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export const ProductCard = (props: Props) => {
  return (
    <ProductDiv>
        <ProductImg src={props.img}></ProductImg>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <PriceNBtn>
            <Price>US$ {props.price}</Price>
            <AddToCartBtn />
        </PriceNBtn>
    </ProductDiv>
  )
}

