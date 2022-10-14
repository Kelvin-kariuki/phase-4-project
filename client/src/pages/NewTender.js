import { useState } from "react";
import { useHistory } from "react-router";


function NewTender({ setTender, tender}) {
  
  const [name, setName] = useState("")
  const [serial, setSerial] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState("")
  const [errors, setErrors] = useState("");
  
  function addForm(newTender) {
    setTender([...tender, newTender])
  }
 
  

   function handleSubmit(event) {
    event.preventDefault();
    let newCompany={
      name:name,
      serial:serial,
      description:description,
      cost:cost,
      
    }

    fetch("/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCompany)
      })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => addForm(data));
        } else {
          response.json().then((errorData) => setErrors(errorData.errors));
        }
      });
    setName("")
    setSerial("")
    setDescription("")
    setCost("")
  }
  
  return (
    <div >
    <h2 >Add New Tender</h2>
    <form>

  <div class="form-group">
    <label for="exampleFormControlInput1">Tender Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setName(e.target.value)} value={name}/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Serial</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setSerial(e.target.value)} value={serial} />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Tender price</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setCost(e.target.value)} value={cost}/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
  </div>
  {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <br></br>
        <br></br>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>create</button>
</form>
    </div>
  )
}
export default NewTender;
