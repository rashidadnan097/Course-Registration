/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [allActors,setAllActors] = useState([]);
    const [selectedAllActors, setSelectedAllActors] = useState([]);
    const [totalCredit,setTotalCredit] = useState(0);
    const [totalRemaining,setRemaining] = useState(0);

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then((data) => setAllActors(data));
    },[])

    const handleAllSelector = (actor) =>{
        const isExist = selectedAllActors.find((item) => item.title==actor.title);

        let count = actor.credit;

        if(isExist){
           return toast("Already Selected This Course");
        }else{
            selectedAllActors.forEach((item) => {
                count = count + item.credit
            });
            const totalRemaining = 20 - count;
           
            if(count > 20){
                return toast("No more then 20 credits");
            }else{
                setTotalCredit(count);
                setRemaining(totalRemaining);
              setSelectedAllActors([...selectedAllActors,actor]);  
            }
             
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
                    < ToastContainer/>
                </div>

                
            ))
           }


            </div>
             <div className="cart">
                <Cart selectedAllActors={selectedAllActors} totalCredit={totalCredit}
                totalRemaining={totalRemaining}></Cart>
             </div>
          </div>
            
        </div>
    );
};

export default Home;