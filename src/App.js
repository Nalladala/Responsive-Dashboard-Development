//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//impoer Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import MyPieChart from './components/MyPieChart';



function App() {
  return (
    <>
    <Header />
    <SideBar />
    <Main />
 <MyPieChart/>
 

    </>
  );
  
}

export default App;
