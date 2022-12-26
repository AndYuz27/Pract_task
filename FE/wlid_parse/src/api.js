import axios from "axios";

export const getCards = async () => {
    try {
        const res = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid`)

        return res.data.data;
    } catch (e) {
        console.log("ERROR")
    }
}