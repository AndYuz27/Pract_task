import {useState, useEffect} from 'react'
import {getCards} from "../../api.js"
import Card from '../Card/Card.js';
function Search() {
const [pords, setProds] = useState([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const setNewCards = async () => {
        let res = await getCards();
        console.log(res);
        setProds(res);
    };
    setNewCards();
}, []);

useEffect(() =>{
setOutput([])
pords.filter(val => {
  if(val.name_prod.toLowerCase().includes(input.toLowerCase())){
    setOutput(output=> [...output, val])
  }else{
    console.log("Такого товара нет")
  }
})

}, [input])


    return (
      <div className="Main">
        <h2>Search the prods</h2>
        <input onChange={e=> setInput(e.target.value)} type="text" placeholder='Search'></input>
          <div className='ddd'>
            {output.map((el, index) => {return <Card key={index} prod={el}/>;})}
          </div>
      </div>
    );
  }
  
  export default Search;
  