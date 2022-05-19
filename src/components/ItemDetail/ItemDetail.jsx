import {Card} from "react-bootstrap"
import ItemCounter from "../ItemCounter/ItemCounter";
export default function ItemDetail ({item}) {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </Card.Text>
        <h3>$ {item.price}</h3>
        <ItemCounter />
      </Card.Body>
    </Card>
     
  );
}