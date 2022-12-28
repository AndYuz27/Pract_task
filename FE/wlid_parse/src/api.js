import axios from "axios";

export const getCards = async () => {
    // try {
        // const res = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid`) // api form FakerApi
        const res = await axios.get(`https://parse-wild.andrieiiuzlov.repl.co/prods`)

        return res.data.data[0];
    // } catch (e) {
    //     console.log("ERROR")
    // }
}