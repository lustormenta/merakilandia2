import './ContactPage.css'
import ThemeContext from '../../context/ThemeContext'
import React, { useContext } from 'react';

export default function ContactPage() {
    const {theme} = useContext(ThemeContext)
    return (
    <div id='contenedorTodo' className={theme ? 'theme-dark' : 'theme-light'}>
        <div id='contactContainer' className={theme ? 'theme-dark' : 'theme-light'}>
            <div className='container'>
                <form action='action_page.php'>

                    <label for='fname'>First Name</label>
                    <input type='text' id='fname' name='firstname' placeholder='Your name..' />

                    <label for='lname'>Last Name</label>
                    <input type='text' id='lname' name='lastname' placeholder='Your last name..' />

                    <label for='country'>Country</label>
                    <select id='country' name='country'>
                        <option value='australia'>Argentina</option>
                        <option value='canada'>Mexico</option>
                        <option value='usa'>Chile</option>
                    </select>

                    <label for='subject'>Subject</label>
                    <textarea id='subject' name='subject' placeholder='Write something..' style={{height: 200}} />

                    <input type='submit' value='Submit' />

                </form> 
            </div>
        </div>
    </div>
    )
}
