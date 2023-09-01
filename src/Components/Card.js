import React from 'react';
import { mydb } from '../firebase';



function Card() {
    const [productsData, setProductsData] = React.useState([]); // used to keep the updates/changes in the documents

    React.useEffect(function () {
        //Logic to read the data from firestore database
        mydb.collection("products").onSnapshot(function (snapshot) {        //here snapshot variable internally is an array where the documents are saved it is array because any number of documents can be saved in it 
            setProductsData(snapshot.docs.map(function (i) {                // 'i' will point to every document present in docs
                return i.data();                                            // useState to store the data in the documents
            }))
        })

    })

    function collectData(e){
        // Logic to collect the data like quantity and the id
        if(localStorage.getItem('cart')== null){
            //Cart is not in the local storage      {'cart':{'id': quantity}}
            //if cart is not available we have to create it
            var cart= {};

            
        }else{
            //if cart is already there in the local storage then that key might be holding quantity and id then that data will be in JSON format
            //convert JSON data in JS object 

            cart= JSON.parse(localStorage.getItem('cart'));

        }
        //We need to get the id
        let myId= e.target.id;
        if(cart[myId]== undefined){       // card[myId] is like card[key] and it will give the value of the key
            
            var quantity= 1;
            var name= document.getElementById('myName'+ myId).innerText;
            var price= Number(document.getElementById('myPrice'+myId).innerText);
            cart[myId]= [name, quantity, price];                  // myId is the key and 1 is the value it will look something like this 'cart'= {2: 1}
        }else{
            // cart[myId][0] += 1;  this does'nt work beacuse in the below line we are multiplying with the quantity but here we did not update that quantity . Though cart[myId][] 
            quantity= cart[myId][1]+1;
            cart[myId][1]= quantity;
            price= Number(document.getElementById('myPrice'+ myId).innerText)*quantity;
            cart[myId][2]= price;      //w/o Number price is kept in string format ex ''
        }
        localStorage.setItem('cart', JSON.stringify(cart))      // to convert JS to JSON to store the data

        // To display data in popover
        displayCart(cart);

        function displayCart(myCart){
            //To display the data that is present in the cart variable
            var cartData= '';
            for (let i in myCart){
                // console.log(mycart[i]);    //mycart(if you click on 2nd item mycart would be {2:['name', 'price', 'quantity']} i.e {})
                cartData= cartData + "Name: "+ myCart[i][0] +', '+ ' Quantity: ' + myCart[i][1] +', ' + ' Price: ' + myCart[i][2]+'.'+ "<br></br>";
                console.log(cartData);

            }
            cartData= cartData + "<a class='btn btn-success' href='summary.html'>Continue</a>"
            document.getElementById('myPopover').setAttribute('data-content',cartData);     //because in popover whatever was in data-content that is replaced by cardData (see Popover button in Navbar)
            // for(let [k,v] of Object.entries(mycart)){ if you use for of you will get an error "mycart not iterable"
            //     console.log(`${k} ${v}`);        DIFFICULT TO USE 'FOR OF' ON OBJECTS
            // }
        }
        
    }

    return (
        <div className= 'all' style={{display: "flex"}}>
            {
                productsData.map(function (i) {
                    return <div key={i.srno} className="card" style={{ width: 400, margin: 30, padding: 30}}> 
                                <h2>{i.srno}</h2>                       
                                <img src={i.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" id={'myName'+ i.srno}>{i.name}</h5>
                                    <del><h5 className="card-title">{i.originalPrice}</h5></del>
                                    <h5 className="card-title" id={'myPrice'+ i.srno}>{i.discountedPrice}</h5>
                                    <p className="card-text">{i.description}</p>
                                    <a href="#" className="btn btn-primary" onClick={collectData} id={i.srno}>Add To Cart</a>
                                </div>
                            </div>

                })
            }

        </div>
    )
}

export default Card;


