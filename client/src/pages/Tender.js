import React,{useEffect, useState} from 'react'

function Tender({setTender, tender}) {
  
  
  function handleDelete(id) {
    fetch(`/tenders/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const deleteTender = tender.filter((tender) => tender.id !== id);
        setTender(deleteTender);
      });
  }

  useEffect(() => {
    // auto-login
    fetch("/tenders").then((r) => {
      if (r.ok) {
        r.json().then(setTender);
      }
    });
  }, []);

  return (
    <div> <div className="row">
    <div className="col m-2">
      {tender.map((tenders)=>(
      <div className='card' style={{width : 25 + 'rem'}} >
         
          Tender Name: &nbsp;{tenders.name}<br></br>
          <br></br>
      <br></br>
          Serial NO: &nbsp;{tenders.serial}<br></br>
          <br></br>
      <br></br>
          Description: &nbsp;{tenders.description}<br></br>
          <br></br>
      <br></br>
          Application fee: &nbsp;{tenders.cost}<br></br>

          <button type="button" class="btn btn-success" onClick={(e) => handleDelete(tender.id)}>Delete</button>
      </div>))}
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      </div>
      
  ) 
}

export default Tender