import ItemList from "../ItemList/ItemList";
import {Container, Row, Col} from "react-bootstrap"
import React from "react";
import { products } from "../../data/products";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if(categoryId){
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(products);
    }
  },[categoryId])
  return (
    <Container className="itemlist-container" style={{justifyContent:'center', textAlign:'center'}}>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        
        <ItemList items={items} />
      </Row>
     
    </Container>
  );
}