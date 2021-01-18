import axios from 'axios';

export default axios.create({
        baseURL : 'http://177efd4e1603.ngrok.io'
});

//to get the above link follow the read me file or below
// Json Server and NGROK :

// outside project folder, create another folder JsonServer"

// Run "npm init"

// next install jsonServer and Ngrok using "npm install json-server ngrok"

// (you can read more here if you need to. https://www.npmjs.com/package/json-server. https://ngrok.com/product )

// create a new file db.json inside above folder. write this line inside the file. make sure you have the double qoutations mentioned in this line
// '{ "blogposts":[] }' and save

// above is a json file where we will store the blogposts from the app.

// Open the file package.json which already exists and change the script inside, like this "scripts": { "db" : "json-server -w db.json", "tunnel" : "ngrok http 3000" },

// NGROK helps in setting up a connection and endpoint to the db and make the db available to be accessed anywhere.

// now open 2 new terminals/command prompts. and change directory into the jsonserver folder in both.

// in one terminal run "npm run db"

// in the second terminal run "npm run tunnel"

// now the connection is set. make sure the URL link showing in this last terminal is your connection link. it will look something like "http://XXXXX.ngrok.io"

// that URL link should be placed in the jsonserver.js file in the project .

// NOTE : this link is only active for 2 hours. so you should run "npm run tunnel" and replace the link in jsonserver.js every 2 hours. this db and server is only for testing and hence the limitation.