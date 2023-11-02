import { Card, SeeMoreBtn, WatchImg, WatchName } from "./styles";


type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export const ProductCard = (props: Props) => {
  return (
    <Card>
        <WatchImg src={props.img}></WatchImg>
        <WatchName>{props.name}</WatchName>
        <SeeMoreBtn href="#">See More</SeeMoreBtn>
    </Card>
  )
}
