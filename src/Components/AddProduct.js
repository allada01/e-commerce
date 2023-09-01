import React from 'react';
import { mydb } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const navigate= useNavigate();      //since you cannot use hooks in userdefined functions

    const [productData, setProductData]= React.useState({       // multiple input data therefore in the form of an object
        productSrno: '',
        productName: '',
        productImageUrl: '',
        productDescription: '',
        productOriginalPrice: '',
        productDiscountedPrice: ''
    })

    function collectIt(e){
        const myData= e.target.value;        //collect data from input box we use e.target.value where e is an event it can collect data from each of the input box
                                            // the name of the input box we are entering the data e.target.name
        setProductData({...productData, [e.target.name]: myData});  // whatever is there in the e.target.name i.e produc Srno and whatever is there in myData that is the value setProductData will store them and update it
        
    }
    console.log(productData);

    function saveData(){
        mydb.collection("products").add({
            srno: productData.productSrno,
            name: productData.productName,
            imageUrl: productData.productImageUrl,
            description: productData.productDescription,
            originalPrice: productData.productOriginalPrice,
            discountedPrice: productData.productDiscountedPrice
        })
        // window.location.pathname= "/home";   // don't use window.location because in Navbar we have given the route to /home if route was not given to /home then can use window.location
        navigate('/home');

    }
  return (
    <div className='row' style={{margin: 40}}>
        <div className='col-md-3'>      {/* total number of columns in bootstrap is 12 */}

            <label>Product Srno</label>
            <input type='number' name='productSrno' class="form-control" onChange={collectIt}/><br></br>

            <label>Product Name</label>
            <input type='text' name='productName' class="form-control" onChange={collectIt}/><br></br>

            <label>Product Image</label>
            <input type='text' name='productImageUrl' class="form-control" onChange={collectIt}/><br></br>

            <label>Product Description</label>
            <textarea rows='4' cols='40' name='productDescription' class="form-control" onChange={collectIt}></textarea><br></br>     {/*because description is big therefore used textarea instead of input*/}
            
            <label>Product Price</label>
            <input type='number' name='productOriginalPrice' class="form-control" onChange={collectIt}/><br></br>

            <label>Product Discounted</label>
            <input type='number' name='productDiscountedPrice' class="form-control" onChange={collectIt}/><br></br>

            <button className='btn btn-outline-success' onClick={saveData}>Add Product</button>
        </div>

    </div>
  )
}

export default AddProduct;