const Card = (fn) =>{

    return(
        <div className="card_main">
                <table>
                    {/* <tr><th>Данные с карточки</th></tr> */}

                    <tr><td>Name prod: {fn.prod.name_prod}<br/>  price: {fn.prod.price}<br/>                    <img src={`https://basket-09.wb.ru/vol${fn.prod.id.toString().substring(0, 4)}/part${fn.prod.id.toString().substring(0, 6)}/${fn.prod.id}/images/c516x688/1.jpg`} alt="Изображение не найдено" className="img_crd" width="300"/>
                    <br/> barnd: {fn.prod.brand} 
                    <br/> id: {fn.prod.id} 
                    <br/> <a href={fn.prod.link}>ссылка на товар</a>  </td></tr>
                </table>
        </div>
    )
}

export default Card