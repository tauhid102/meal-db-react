import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal,strArea,strMealThumb,strMeal}=props.meal;
    console.log(idMeal);
    return (
        <div className='meal'>
            <img className='meal-img' src={strMealThumb} alt="" width='200px' />
            <h4>{strMeal}</h4>
            <h5>{strArea}</h5>
            <Link to={`/restuarant/${idMeal}`}>Meal Details</Link>
        </div>
    );
};

export default Meal;