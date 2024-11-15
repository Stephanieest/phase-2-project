import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <h1>
                Welcome to Steph-FC!! -  Where Every Meal is Made with Love 😋❤️
            </h1>
            <p>
                Step into the warmth of Steph-FC!!!!🏬 A cozy haven where every dish is crafted with care and passion👩🏽‍🍳🍳🍽️. From savory, soul-satisfying meals to decadent desserts that make every bite unforgettable, we’ve got something for everyone. Whether you’re here for a casual meal with friends or a special celebration, our menu features fresh ingredients and flavors that will make you feel right at home🏠. Come hungry🥺, leave happy😁😃, and let us take care of the rest😊. 
            </p>

            <img
              src="https://i.pinimg.com/736x/64/aa/3d/64aa3ddf546104532055c81fc645c3c6.jpg"
              alt="Restaurant interior"
            />

            <div>
                <Link to="/menu">
                 <button> Explore the Menu </button>
                </Link>
            </div>
        
        </div>
    )
}

export default Home;