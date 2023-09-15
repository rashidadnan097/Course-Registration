/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allActors,setAllActors] = useState([]);
    const [selectedAllActors, setSelectedAllActors] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then((data) => setAllActors(data));
    },[])

    const handleAllSelector = (actor) =>{
        const isExist = selectedAllActors.find((item) => item.title==actor.title);
        if(isExist){
            alert("Already Selected");
        }else{
            setSelectedAllActors([...selectedAllActors,actor]);
        }
 
    };
    console.log(selectedAllActors);


    return (
        <div className='container'>
          <div className="home-container">
            <div className="card-container">

           {
            allActors.map(actor => (
                <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h4>{actor.title}</h4>
                    <p><small className='description'>{actor.description}</small></p>
                    <div className="info">
                        <p>Price: {actor.price}</p>
                        <p>Credit: {actor.credit}hr</p>
                    </div>
                    <button onClick={() => handleAllSelector(actor)} className='card-btn'>Select</button>
                </div>

                
            ))
           }


            </div>
             <div className="cart">
                <Cart selectedAllActors={selectedAllActors}></Cart>
             </div>
          </div>
            
        </div>
    );
};

export default Home;