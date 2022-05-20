import {Card} from "react-bootstrap"
import ItemCounter from "../ItemCounter/ItemCounter";
export default function ItemDetail ({item}) {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Actual Stock : {item.stock}
        </Card.Text>
        <h3>$ {item.price}</h3>
        <ItemCounter />
      </Card.Body>
    </Card>
     
  );
}