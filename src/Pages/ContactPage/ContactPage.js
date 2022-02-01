import './ContactPage.css'
import ThemeContext from '../../context/ThemeContext'
import React, { useContext, useState } from 'react';

export default function ContactPage() {
    const {theme} = useContext(ThemeContext)
    const [comment, setComment] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setComment(!comment)
    }
    return (
    <div id='contenedorTodo' className={theme ? 'theme-dark' : 'theme-light'}>
        <div id='contactContainer' className={theme ? 'theme-dark' : 'theme-light'}>
            <div className='container'>
                <form action='action_page.php'>

                    <label htmlFor='fname' >First Name</label>
                    <input type='text' id='fname' name='firstname' placeholder='Your name..' />

                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id='lname' name='lastname' placeholder='Your last name..' />

                    <label htmlFor='country'>Country</label>
                    <select id='country' name='country'>
                        <option value='australia'>Argentina</option>
                        <option value='canada'>Mexico</option>
                        <option value='usa'>Chile</option>
                    </select>

                    <label htmlFor='subject'>Subject</label>
                    <textarea id='subject' name='subject' placeholder='Write something..' style={{height: 200}} />

                    <input type='submit' value='Submit' onClick={(e)=>{handleSubmit(e)}}/>
                </form> 
            </div>
            {
                comment &&
                <div className={`sent-container ${comment ? "active" : ""}`}>
                    <div className='sent-content'>
                        <button onClick={(e)=>{handleSubmit(e)}}>&times;</button>
                        <h3>¡Muchas Gracias!</h3>
                    </div>
                </div>
            }
        </div>
    </div>
    )
}
