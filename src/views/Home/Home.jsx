import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to Fennex</h1>
      <p>The best place to buy PC Components</p>
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );
}