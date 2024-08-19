import { Card, SeeMoreBtn, WatchImg, WatchName } from "./MiniProductCard.style";


type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export const MiniProductCard = (props: Props) => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Card>
        <WatchImg src={props.img}></WatchImg>
        <WatchName>{props.name}</WatchName>
        <SeeMoreBtn
          onClick={handleClick}
          to="/products"
        >See More</SeeMoreBtn>
    </Card>
  )
}
