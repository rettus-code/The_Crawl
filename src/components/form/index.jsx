import React, { useState } from 'react';

export const Form = () => {
    // Add your form logic here
    const [listType, setListType] = useState('pub');
    const [location, setLocation] = useState('1428 Post Alley Walk Wy Seattle');
    const [radius, setRadius] = useState(1609);
    const submitForm = (e) => {
        setListType(document.getElementById('location').value);
        setLocation(document.getElementById('location').value);
        setRadius(document.getElementById('radius').value * 1609);
        console.log(listType, location, radius);
    };
    return (
        <div>
            <form onsubmit="return false" action={submitForm}>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location"/>
                <label htmlFor="radius">Radius In Miles</label>
                <select type="number" id="radius" name="radius"> 
                    <option value=".5">.5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="listType">List Type</label>
                <select type="text" id="listType" name="listType"> 
                    <option value="pub">Pub</option>
                    <option value="brewery">Brewery</option>
                    <option value="restaurant">Restaurant</option>
                </select>
                <button id="submitForm">Submit</button>
            </form>
        </div>
    );
};

