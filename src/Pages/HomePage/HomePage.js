import './HomePage.css'
import ThemeContext from '../../context/ThemeContext'
import React, { useContext } from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

export default function HomePage() {
    const {theme} = useContext(ThemeContext)
    console.log('theme desde home page: ', theme)
    return(
        <div id='ListItems' className={theme ? 'theme-dark' : 'theme-light'}>
            <ItemListContainer />
        </div>
    ) 
}
