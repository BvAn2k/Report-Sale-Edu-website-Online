
import './App.css';
import HomePage from './page/user/homePage';
import LoginPage from './page/login/loginPage';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import SignPage from './page/sign/signPage';
import Cart from './components/user/header/cart';
import AdminPage from './page/admin/adminPage';


import './App.css';
import AddUser from './components/admin/addUser';
import AddProduct from './components/admin/addProduct';



// import Login from './page/Login';
// import UserInterface from './page/UserInterface';
// import UserCreatePage from './page/UserCreatePage';
// import UserEditPage from './page/UserEditPage';
// import CategoriesListPage from './page/CategoriesListPage';
// import CategoryGroupPage from './page/CategoryGroupPage';
// import CategoryGroupCreatePage from './page/CategoryGroupCreatePage';
// import CategoryGroupEditPage from './page/CategoryGroupEditPage';
// import CategoryCreatePage from './page/CategoryCreatePage';
// import CategoryEditPage from './page/CategoryEditPage';
// import TransactionPage from './page/TransactionPage';
// import TransactionCreatePage from './page/TransactionCreatePage';
// import TransactionEditPage from './page/TransactionEditPage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/addproduct' element={<AddProduct/>}></Route>
      <Route path='/adduser' element={<AddUser/>}></Route>
      <Route path='/admin' element={<AdminPage/>}></Route>
     
   <Route path="/home" element={<HomePage />}></Route>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/sign' element={<SignPage/>}/>
      <Route path='/cart' element={<Cart/>}></Route> 
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
