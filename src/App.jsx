import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import {Link} from 'react-router'
import Navbar from "./components/NavBar/NavBar";
import {Route, Routes} from 'react-router';
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from './components/MailboxDetails/MailboxDetails'

const App = () => {

const [mailboxes, setMailboxes] = useState([]);


const addBox = (newBox) => {
  newBox._id = mailboxes.length + 1
  setMailboxes([...mailboxes, newBox])
}





return(

   <>
   <Navbar/>
  <h1>Post Office</h1>

  <Routes>
    <Route path='/' element={<h2>Home Page</h2>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
    <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />}  />
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails/>} />
    <Route path='*' element={<h2>Nothing on this page...yet!</h2>}></Route> 
</Routes>
</>

  );
};

export default App;