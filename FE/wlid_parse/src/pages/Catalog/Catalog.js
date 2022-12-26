import {useState, useEffect} from 'react'
import {getCards} from "../../api.js"
import Card from '../Card/Card.js';



const Catalog = () =>{

    const [pords, setProds] = useState([]);

useEffect(() => {
    const setNewCards = async () => {
        let res = await getCards();
        console.log(res);
        setProds(res);
    };
    setNewCards();
}, []);



    return(
        <div className="cards_main">
            <div className="ff">
            <table>
                    <tr><th>Данные с карточки</th></tr>
                    {pords.map((el, index) => {
                    return <Card key={index} prod={el}/>
                })}
                </table>

            </div>
        </div>
    )
}

export default Catalog

