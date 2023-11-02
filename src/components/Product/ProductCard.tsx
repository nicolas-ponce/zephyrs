

type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
}

export const ProductCard = (props: Props) => {
  return (
    <div key={props.id}>
        <img src={props.img}></img>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
  )
}
