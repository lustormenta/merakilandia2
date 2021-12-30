import { Link } from 'react-router-dom'
import React from 'react'
import './ItemCartButton.css'
import Button from '@mui/material/Button';

export default function ItemCartButton() {
    return (
        <>
        <Button className='btn-Carritos'><Link to='/cart'>Ir a carrito</Link></Button>
        </>
    )
}

