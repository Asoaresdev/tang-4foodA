import React from 'react'
import FormAdress from '../../Components/FormAdress';
import Header from '../../Components/Header';


export default function AddAddressPage() {

    return (
        <div>
            <Header />
            <FormAdress 
            texto={"Meu endereço"}/>
        </div>
    )
}