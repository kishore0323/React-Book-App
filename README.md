
# React-Book-App
Simple Book Application with CRUD operations using form, routing, fetch api and json server.
Consists of two application one using array and other using json server to persist data.

## 1. Book App using Array to persist data temporarily untill project restart

Add BookApp class in index.js file  
ReactDOM.render(<BookApp />, document.getElementById('root'));

### `npm start`

## 2. Book Store using Json Server to persist data

## Install and Run the Json Server

### `npm install -g json-server`

### `json-server --watch book.json --port 5000`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
