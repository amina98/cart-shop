import axios from "axios";
//

const BASE_URL = "https://fakestoreapi.com";

const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products?limit=20`);
    return response.data;
};

const autheration = async (name, email, password) => {
    const res = await fetch("https://api.freerealapi.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    });
    return await res.json();
};
const login = async (email, password) => {
    const res = await fetch("https://api.freerealapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    return await res.json();
    // .then((response) => response.json())
    // .then((json) => console.log(json));
};
export { getProduct, autheration, login };
