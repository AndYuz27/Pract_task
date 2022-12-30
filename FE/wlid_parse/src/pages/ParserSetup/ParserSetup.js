import {useState} from 'react'

const ParserSetup = () =>{

 const [data, setData] = useState({
  url:"",
  min_price:"",
  max_price:"",
 })

 const onChange = e => {
  setData({...data,[e.target.name]:[e.target.value]})
 }

    return (
        <div className="PSetup">
            <h3>Parse Setup</h3>
            <form>
  <label>
    Sample text:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
    )
}

export default ParserSetup