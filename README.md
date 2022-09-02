# IP Geolocation and Threat Detector
This is a small project that uses an API in order to search an ip and get info about it.

## Stack
* **ReactJS**: I used React library to develop this web app
* **Pico.css**: This is a small css library that gives styles to your web (see: https://picocss.com/)

## Folder Hierarchy

```
📦ip-threat-detector  
 ┣ 📂public  
 ┃ ┣ 📜favicon.ico  
 ┃ ┣ 📜index.html  
 ┃ ┣ 📜logo192.png  
 ┃ ┣ 📜logo512.png  
 ┃ ┗ 📜manifest.json  
 ┣ 📂src  
 ┃ ┣ 📂components  
 ┃ ┃ ┗ 📂Form  
 ┃ ┃ ┃ ┗ 📜Form.jsx  
 ┃ ┣ 📜App.css  
 ┃ ┣ 📜App.js  
 ┃ ┣ 📜index.css  
 ┃ ┗ 📜index.js  
 ┣ 📜.gitignore  
 ┣ 📜README.md  
 ┣ 📜package-lock.json  
 ┗ 📜package.json
```

## Functionality
There is two principal functionalities inside this app:
* Fetching data from the API: I used fetch() from JavaScript to retrieve the data from the API.
	* The GET method requires an ip, it is the one that you write inside de input box.
* Write the data in the HTML code: I used useState() hook from ReactJS to write all the data from the API.
	
	```
	const  [fetchedResults, setResults]  =  useState();
		
	fetch(urlWithIp,  OPTIONS)
	.then(response => response.json())
	.then(response =>  {
		setResults(response);
	})
	.catch(err =>  console.error(err));
	
	// and then I list the results inside the <pre> tag
	<pre  id='results'>
		{JSON.stringify(fetchedResults,  null,  '  ')}
	</pre>
	```
