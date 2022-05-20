import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to Fennex</h1>
      <h2>The best place to buy PC Components</h2>
      <br />
      <ItemListContainer title="What are you looking for?"/>
      <Footer />
    </div>
  );
}