import './App.css';
import Header from './Header';
import Home from './componenets/Home';
import ListStudent from './componenets/ListStudent'
import AddStudent from './componenets/AddStudent';
import EditStudent from './componenets/EditStudent'
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

    <Header />
  <Routes>
  <Route exact path="/" element={<Home/>}/>
<Route path="/list-student" element={<ListStudent/>}/>
<Route path="/add-student" element={<AddStudent/>}/>
<Route path="edit-student/:id" element={<EditStudent/>}/>

    </Routes> 


      </BrowserRouter>

 
   
  );
}

export default App;
