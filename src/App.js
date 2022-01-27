import "./App.css";
import { Redirect, Route, Switch } from "react-router";
//Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Notifications from "react-notify-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Components
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./pages/ShopCart";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Regester from "./pages/Regester";
function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Notifications />
                <Navbar />
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/regester" component={Regester} />
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/products" component={Store} />
                    <Route path="/cart" component={ShopCart} />
                    <Route path="/" component={Home} />
                    <Redirect to="/products" />
                </Switch>
                <Footer />
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
