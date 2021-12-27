import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HomePage from '../../Pages/HomePage/HomePage.js';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/aboutus' element={<AboutUsPage />} />
                <Route path='/product/:id' element={<ItemDetailContainer/>} />
                <Route path='/:category' element={<ItemListContainer />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


