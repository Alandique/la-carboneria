import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContrainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9PyKp9oEKvwr9nAWTqzPbwDhCPRqCUg",
  authDomain: "la-carboneria.firebaseapp.com",
  projectId: "la-carboneria",
  storageBucket: "la-carboneria.appspot.com",
  messagingSenderId: "20239504745",
  appId: "1:20239504745:web:d8f99504a0af76ae09d9f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const{db} = getFirestore(app);

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;