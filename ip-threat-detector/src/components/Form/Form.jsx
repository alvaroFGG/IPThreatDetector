import React from 'react'

const Form = () => {

    const URL = 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/';
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f9303a292msh121e351e7dff864p1aaa79jsn57f2814e2b91',
            'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
        }
    };
    let fetchedResults = '';
    
    const fetchAPI = (ip) => {
        const urlWithIp = URL+ip;
        
        fetch(urlWithIp, OPTIONS)
            .then(response => response.json())
            .then(response =>  {
                document.getElementById('results__container').style = 'visibility: visible'
                document.getElementById('results').innerHTML = JSON.stringify(response, null, ' ');
            })
            .catch(err => console.error(err));
        
            console.log(fetchedResults);
        
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.ip.value;
        // if(value == null) return;
        fetchAPI(value);
    }

  return (

    <>

        <form onSubmit={handleSubmit}>
            <label>
                User Ip
                <input placeholder='Write an ip' name='ip'  ></input>
            </label>

            <button type='submit'>Search for this IP</button>
        </form>

        <div id='results__container' style={{visibility: "hidden"}}>
            <pre id='results'>
                {JSON.stringify(fetchedResults, null, ' ')}
            </pre>
        </div>

    </>
  )
}

export default Form