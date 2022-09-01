import React from 'react'
import { useState } from 'react';

const Form = () => {

    const URL = 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/';
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f9303a292msh121e351e7dff864p1aaa79jsn57f2814e2b91',
            'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
        }
    };
    const [fetchedResults, setResults] = useState();
    
    const fetchAPI = (ip) => {
        const urlWithIp = URL+ip;
        
        fetch(urlWithIp, OPTIONS)
            .then(response => response.json())
            .then(response =>  {
                setResults(response);
            })
            .catch(err => console.error(err));
        
            console.log(fetchedResults);
        
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.ip.value;
        if(value === '') return;
        fetchAPI(value);
    }

  return (

    <>

        <form onSubmit={handleSubmit}>
            <label>
                User IP
                <input placeholder='For example: 54.85.132.205' name='ip' required ></input>
            </label>

            <button type='submit'>Search for this IP</button>
        </form>

        <div id='results__container'>
            <pre id='results'>
                {JSON.stringify(fetchedResults, null, ' ')}
            </pre>
        </div>

    </>
  )
}

export default Form