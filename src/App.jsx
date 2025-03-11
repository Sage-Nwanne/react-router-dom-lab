import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import {Link} from 'react-router'
import Navbar from "./components/NavBar/NavBar";
import {Route, Routes} from 'react-router';
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from './components/MailboxDetails/MailboxDetails'

const App = () => {

const [mailBoxes, setMailBoxes] = useState([])


const addBox = (newBox) => {
  newBox._id = mailBoxes.length + 1
  setMailBoxes(...mailBoxes, newBox)
}





return(

   <>
   <Navbar/>
  <h1>Mailboxes</h1>;

  <Routes>
    <Route path='/' element={<h1>Home Page</h1>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailBoxes}/>} />
    <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />}  />
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails/>} />
    <Route path='*' element={<h2>Nothing on this page...yet!</h2>}></Route> 
</Routes>
</>

  );
};

export default App;