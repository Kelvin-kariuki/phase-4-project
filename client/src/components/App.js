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

    fetch("/tenders").then((r) => {
      if (r.ok) {
        r.json().then((data) => setTender(data));
      }
    });

  }, []);

  if (!user) return <Login onLogin={setUser} />;

 

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      
      <main>
        <Switch>
          <Route path="/new">
          <Tender tender={tender} setTender= {setTender}/>
            {/* <NewTender user={user} /> */}
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;
