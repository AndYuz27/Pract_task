const Card = (fn) =>{

    return(
        <div className="card_main">
                <table>
                    {/* <tr><th>Данные с карточки</th></tr> */}
                    <tr><td>Name product: {fn.prod.name_prod}<br/>  price: {fn.prod.price}
                    <br/> barnd: {fn.prod.brand} 
                    <br/> <a href={fn.prod.link}>ссылка на товар</a>  </td></tr>
                </table>
        </div>
    )
}

export default Card