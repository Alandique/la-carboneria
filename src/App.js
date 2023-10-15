import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContrainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos, pagina en construccion"/>
      <Footer />
    </div>
  );
}

export default App;
