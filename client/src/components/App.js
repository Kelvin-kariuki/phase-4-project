import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewTender from "../pages/NewTender";
import Tender from "../pages/Tender";

function App() {
  const [user, setUser] = useState(null);
  const [tender, setTender] = useState([]); 
 
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });



  }, []);

  if (!user) return <Login onLogin={setUser} />;

 

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      
      <main>
        
         
          <Tender tender={tender} setTender={setTender}/>
          

          
          <NewTender tender={tender} setTender={setTender} />

      </main>
    </>
  );
}

export default App;
