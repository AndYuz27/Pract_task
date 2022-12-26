const Card = (fn) =>{

    return(
        <div className="card_main">
                <table>
                    {/* <tr><th>Данные с карточки</th></tr> */}
                    <tr><td>Name product: {fn.prod.name}  price: {fn.prod.price} </td></tr>
                </table>
        </div>
    )
}

export default Card