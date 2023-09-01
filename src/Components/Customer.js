import React from 'react'
import { mydb } from '../firebase';

function Customer() {

    React.useEffect(function(){
        const name= localStorage.getItem('Name');
        const city= localStorage.getItem('City');
        const country= localStorage.getItem('Country');
        const pincode= Number(localStorage.getItem('Pincode'));
        const amount= Number(localStorage.getItem('totalPrice'));

        mydb.collection('customer').add({
            name: name,
            city: city,
            country: country,
            pincode: pincode,
            amount: amount
        })
    })
  return (
    <div>

    </div>
  )
}

export default Customer