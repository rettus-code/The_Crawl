import React, { useState } from 'react';
export const Pub = () => {
    const location = '1428 Post Alley Walk Wy Seattle';
    const radius = 1609;
    const [bars, setBars] = useState([]);
    let fullList = [];
 
    const getBars = (offset = 0) => {
        console.log(offset);
        fetch(`https://api.yelp.com/v3/businesses/search?term=beer,cocktails&location=${location}&categories=bars,pubs&limit=40&radius=${radius}&sort=distance&offset=${offset}`, {
            method: 'GET',
            headers: { 
                'Authorization': process.env.REACT_APP_AUTHORIZATION,
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
            if(data?.businesses){
                fullList = fullList.concat(data.businesses);
                if(data?.businesses.length == 40 && fullList.length < 240) {
                    getBars(offset + 40);
                } else {
                    setBars(fullList);
                    console.log(fullList);
                }
                
            }
            
        });
    }
    const handleClicked = () => {
        getBars(0);
    };
    return (
        <div>
            <h1>Pubs and Bars</h1>
            <h2>Location: {location}</h2>
            <button onClick={handleClicked}>Get Bars</button>
            <ul>
                {bars.map((bar) => {
                    return (
                        <li key={bar?.id}>
                            <h3>{bar?.name}</h3>
                            <p>{bar?.location.display_address.join(' ')}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};