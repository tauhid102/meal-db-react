import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restuarant.css';

const Restuarant = () => {
    const [searchText, setSearchTest] = useState('');
    const [melas, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);
    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchTest(searchTextValue);

    }
    return (
        <div>
            <input onChange={handleSearchField} placeholder='Search meals Here' type="text" />
            <div className='meal-container'>
                {
                    melas.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}></Meal>)
                }
            </div>
        </div>

    );
};

export default Restuarant;