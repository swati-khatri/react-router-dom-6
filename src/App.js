import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import NomatchFound from "./components/NomatchFound";
import Product from "./components/Products/Product";
import Feature from "./components/Products/Feature";
import New from "./components/Products/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Product />}>
          <Route index element={<Feature />} />
          <Route path="featured" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NomatchFound />} />
      </Routes>
    </div>
  );
}

export default App;
