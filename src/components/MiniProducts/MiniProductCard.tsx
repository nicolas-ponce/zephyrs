import { Card, SeeMoreBtn, WatchImg, WatchName } from "./MiniProductCard.style";


type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export const MiniProductCard = (props: Props) => {
  return (
    <Card>
        <WatchImg src={props.img}></WatchImg>
        <WatchName>{props.name}</WatchName>
        <SeeMoreBtn href="#">See More</SeeMoreBtn>
    </Card>
  )
}
