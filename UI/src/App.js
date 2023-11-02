import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/header';
import Nav from './NavComponent/nav';
import Home from './HomeComponent/home';
import About from './AboutComponent/about';
import Contact from './ContactComponent/contact';
import Service from './ServiceComponent/service';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';
import Adminhome from './AdminHomeComponent/adminhome';
import Manageusers from './ManageusersComponent/manageusers';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import CPAdmin from './CPAdminComponent/CPAdmin';
import EPAdmin from './EPAdminComponent/EPAdmin';
import AddProject from './AddProjectComponent/AddProject';
import AddGroup from './AddGroupComponent/AddGroup';
import AddAssaignProject from './AddAssainProjectComponent/AddAssaignProject';
import Userhome from './UserHomeComponent/userhome';
import ProjectList from './ProjectListComponent/ProjectList';
import Footer from './FooterComponent/footer';
import Slider from './SliderComponent/Slider';
import Logout from './LogoutComponent/Logout';




function App() {
 return (
 <>
 <Header/>

<Nav/>

<Slider/>
<Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>  
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
      <Route path="/admin" element={<Adminhome />} ></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>
      <Route path="/plist" element={<ProjectList/>} ></Route>
      <Route path="/cpadmin" element={<CPAdmin/>} ></Route>
      <Route path="/epadmin" element={<EPAdmin />} ></Route>
      <Route path="/manageusers" element={<Manageusers />} ></Route>
      <Route path="/addproject" element={<AddProject />} ></Route>
      <Route path="/addgroup" element={<AddGroup />} ></Route>
      <Route path="/addassaignproject" element={<AddAssaignProject />} ></Route>




      


      </Routes>
      <Footer/>

  {/* Back to Top */}
<a href="#" class="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
  </>
 );
}
export default App;
