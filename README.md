# Elteck Electric Angular Project
 This is a project for SoftUni's Final Angular Exam! It is a completely original idea, built for a real client. This repo comes with two folders. One contains the front-end part of the project with TypeScript, SCSS and Angular. The server folder contains the back-end part - written in Node JS, Express.js and using Mongo DB as a database service. The project also uses Firebase's authentication api and storage api.

## How to set up?
* First, access each folder (elteck-angular-final & elteck-server) seperately in the terminal of your choice.
* Run `npm i` or `npm install` to download all the necessary packages.
* Run `ng serve` in the elteck-angular-final folder to start the front-end part of the project.
* NOTE: The back-end part of the project is originally connected to a Mongo DB database hosted on Mongo Atlas. If you want to use your own database, you can change the connection string in the index.js file in the elteck-server folder.

**COPY PASTE THE CODE BELOW IN THE INDEX.JS FILE IN THE ELTECK-SERVER FOLDER:**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/router');
const mongo_uri = 'mongodb://127.0.0.1:27017/elteck';
```

* Run `npm start` in the elteck-server folder to start the back-end part of the project.
* Enjoy!

## How to use?
* The project is a website for a company that offers electrical services. 
* For non-registered users, the website offers a home page, an about page, a register page and a login page.
* For registered users, in addition to the above, the website offers a gallery page, contact page, review page, create review page and a profile page.




