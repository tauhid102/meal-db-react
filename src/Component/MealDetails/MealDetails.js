import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const { mealID } = useParams();
    const [mealDetails, setMealDetails] = useState([]);
    const history = useHistory()
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, []);
    
    const goingToRestuarent=()=>{
        history.push('/restuarent');
    }
    return (
        <div>
            <img src={mealDetails.strMealThumb} alt="" />
            <h3>{mealDetails.strMeal}</h3>
            <p>{mealDetails.strInstructions}</p>
            <button onClick={goingToRestuarent}>Goint to Resturant</button>
        </div>
    );
};

export default MealDetails;