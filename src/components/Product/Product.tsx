

type Props = {
    name: string;
    price: number;
    description: string;
    img: string;
}

export const Product = (props: Props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
  )
}
