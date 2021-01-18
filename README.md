# Blog_app1


This is a react native complete app that will run on android and iphone(iOS)

It displays a list of blog posts. you can create, edit, delete, blogposts, view. 

Blogposts are stored on a remote Json Server, with help of Jsonserver and NGROK packages which i will explain in sometime. 

Screenshots are there to see how the app works.

INITIAL SETUP :

Install Node JS and React Native.

To install React Native

Install expo or react native Cli. https://reactnative.dev/docs/environment-setup. (remember you are not creating a new project here, you are running a existing one. so follow the steps related to that.)

Run npm install inside the project folder in Terminal/commandPrompt wherever your npm commmad works. https://www.sitepoint.com/npm-guide/

Above step will install all dependencies for this project.

Json Server and NGROK : 

outside project folder, create another folder JsonServer"
Run "npm init"
next install jsonServer and Ngrok using "npm install json-server ngrok" 
(you can read more here if you need to. https://www.npmjs.com/package/json-server.  https://ngrok.com/product ) 
create a new file db.json inside above folder. write this line inside the file. make sure you have the double qoutations mentioned in this line  '{ "blogposts":[] } and save
above is a json file where we will store the blogposts. 
Open the file package.json which already exists and change the script inside, like this
"scripts": {
    "db" : "json-server -w db.json",
    "tunnel" : "ngrok http 3000"
  },
  
NGROK helps in setting up a connection and endpoint to the db and make the db available to be accessed anywhere. 
now open 2 new terminals/command prompts. and change directory into the jsonserver folder in both.
in one terminal run "npm run db"
in the second terminal run "npm run tunnel" 
now the connection is set. make sure the URL link showing in this last terminal is your connection link. it will look something like "http://XXXXX.ngrok.io" 
that URL link should be placed in the jsonserver.js file in the project .
NOTE : this link is only active for 2 hours. so you should run "npm run tunnel" and replace the link in jsonserver.js every 2 hours. this db and server is only for testing and hence the limitation. 



if npm command is not running then there is some issues that you would need to fix with node Js. it will take some time to search online and fix the npm so the commands run properly.

Have patience. it might take 2days to a week to finally fix npm, react native and the code to run. I repeat, Have patience and keep at it.

Feel free to reach me ptpmashish@gmail.com or whatsapp +917893332334 if you are facing any issues.

Happy coding!
<3 
