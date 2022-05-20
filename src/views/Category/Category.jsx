import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();

  return (
    <div>
      <Header />
      <h1>Our Category´s</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}