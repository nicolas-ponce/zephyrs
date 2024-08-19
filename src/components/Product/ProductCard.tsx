import { AddToCartBtn } from '../Buttons/AddToCart_Button/AddToCartBtn';
import { CardInfo, Description, Name, Price, PriceNBtn, ProductDiv, ProductImg, ProductImgDiv } from './ProductCard.style';

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
      <ProductImgDiv>
        <ProductImg src={props.img}></ProductImg>
      </ProductImgDiv>

      <CardInfo>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </CardInfo>

      <PriceNBtn>
          <Price>US$ {props.price}</Price>
          <AddToCartBtn />
      </PriceNBtn>
    </ProductDiv>
  )
}

