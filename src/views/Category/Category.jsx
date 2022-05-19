import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId)
  return (
    <div>
      <Header />
      <h1>Full Product List</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}