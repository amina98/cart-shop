import "./App.css";
import { Redirect, Route, Switch } from "react-router";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
//Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Footer from "./components/shared/Footer";

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar />
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/products" component={Store} />
                    <Route path="/cart" component={ShopCart} />
                    <Redirect to="/products" />
                </Switch>
                <Footer />
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
