
//importation

import './App.css';
import { Routes , Route } from 'react-router-dom'
import FullName from './Pages/FullName';
import ProfilePhoto from './Pages/ProfilePhoto';
import Address from './Pages/Address';
import Error from './Pages/Error';
import Profile from './Components/Profile/Profile';





function App() {
  return (

    // specification du nom de chemin (path)

    <div>
    
      <Profile/>
       <Routes>
       
       <Route exact path="/FullName" element={<FullName/>}/>
       <Route path="/ProfilePhoto" element={<ProfilePhoto/>}/>
       <Route path="/Address" element={<Address/>}/>
       <Route path="/*" element={<Error/>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
