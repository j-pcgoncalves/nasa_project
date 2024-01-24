# NASA Project

This project is made with React for the Front-End and NodeJS and Express for the Back-end. It integrates with a MongoDB Database to be able to store and retrieve all the launches created by the user and retrieved from the SpaceX API and Kepler Planets info. With this project the user can add a new launch and check which launches are pending and which have been successful. The user is able to delete launches too. This project also has a way of checking all the launches history including those retrieved by the SpaceX API. It makes use of Docker to create a container of the whole project.

## How to Use

To run this project in your computer you can clone it. After that you need to create an .env file inside server/src/ and inside that file you will create the following variable:
- MONGO_URL: "path to your own mongoDB database"
With all set you can write in your terminal "npm run deploy" to start the development server.

## Testing

This project uses Jest to test the launches endpoints.

## Credits

This project was made for the Zero to Mastery Course: [Complete Node.js Developer in 2024](https://zerotomastery.io/courses/learn-node-js/), taught by Andrei Neagoie and Adam Odziemkowski
