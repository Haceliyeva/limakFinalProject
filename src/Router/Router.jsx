import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/login/Login';
import Register from '../Pages/register/Register';
import AddNewTodo from '../Pages/addToDo/AddNewTodo';
import Profile from '../Pages/profile/Profile';
import Trendyol from '../Components/StoreMarks/Trendyol/Trendyol';
import Zerrincan from '../Components/StoreMarks/Zerrincan/Zerrincan';
import Sarar from '../Components/StoreMarks/Sarar/Sarar';
import Pazarium from '../Components/StoreMarks/Pazarium/Pazarium';
import Lancome from '../Components/StoreMarks/Lancome/Lancome';
import Aker from '../Components/StoreMarks/Aker/Aker';
import Package from '../Pages/Buttons/Package/Package';
import Calculator from '../Components/SitePages/Calculator/Calculator';
import Contact from '../Components/SitePages/Contact/Contact';
import Kargomat from '../Components/SitePages/Kargomat/Kargomat';
import Marks from '../Components/SitePages/Marks/Marks';
import News from '../Components/HomePage/News/News';
import Tariffs from '../Components/SitePages/Tariffs/Tariffs';
import Updates from '../Components/SitePages/Updates/Updates';
import NewsDetail from '../Components/SitePages/NewsDetail/NewsDetail';
import Questions from '../Components/SitePages/Rules/Questions';
import About from '../Components/SitePages/About/About';
import Conditions from '../Components/SitePages/Conditions/Conditions';
import Detailpage from '../Components/DetalPage/DetalPage';
import Basket from '../Pages/Basket/Basket';
import Payment from '../Pages/Basket/Payment';
import Wishlist from '../Pages/Wishlist/Wishlist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tariffs' element={<Tariffs />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/kargomat' element={<Kargomat />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/updates' element={<Updates />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-new-todo" element={<AddNewTodo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stores" element={<Marks />} />
        <Route path="/trendyol" element={<Trendyol />} />
        <Route path="/zerrincan" element={<Zerrincan />} />
        <Route path="/sarar" element={<Sarar />} />
        <Route path="/pazarium" element={<Pazarium />} />
        <Route path="/lancome" element={<Lancome />} />
        <Route path="/aker" element={<Aker />} />
        <Route path="/package" element={<Package />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/product/:note_id" element={<Detailpage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/basket/payment" element={<Payment />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

