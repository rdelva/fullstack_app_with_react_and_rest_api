/*
* @param {string} path - part of the url, where on the page you want to go
* @param {string} method - Tells if you want to get information, send information to be saved (GET, POST, DELETE)
* @param {string} body - the data your trying to retrieve or send
* @param {string} credentials - the email address and password that is used so info can be verified
* @return {string, object} - All combined info will be sent to where fetch() is being used.
*/

export const api = (
     path,
     method = "GET",
     body = null, 
     credentials = null
    ) => {

    
    const url = "https://fullstackapp-production-36a6.up.railway.app/api" + path;
   //old url  http://localhost:5000/api

    const options = {
        method,
        headers: {}
    };

    if(body) {
        options.body = JSON.stringify(body);
        options.headers["Content-Type"] = "application/json; charset=utf-8"
    }

    if(credentials) {
        const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
        options.headers.Authorization = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
}

