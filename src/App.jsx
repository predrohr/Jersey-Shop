import './App.css';
import { useState } from 'react';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';


function App() {

    const [items, setItems] =  useState([
        {
            
            id: 1, 
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 2, 
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }
    ]);

    const itemsInBag = items.filter(item => item.isInBag)

    const shopName = "Jersey Shop Made with React JS"

    function selectHendler (id){
        let item = items.filter(item => item.id === id)[0];
        item.isInBag = !item.isInBag;
        setItems(items.map(it => it.id === id ? item : it));    
    }

    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>
                
                {items.map(item => <>{
                    <Item 
                    selectProduct={(id) => selectHendler(id)} 
                    item={item} 
                    key={item.id}
                    />
                    }
                </>
                )
                }
            </section>
            
            {itemsInBag.length > 0 && <OrderDetails itemsInBag={itemsInBag}/>}
        </>
    );
}

export default App
