import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 'samanta', name: 'Samanta'},
  {id: 'alexa', name: 'Alexa'},
  {id: 'olivia', name: 'Olivia'},
  {id: 'chloe', name: 'Chloe'},
  {id: 'emily', name: 'Emily'},
  {id: 'carla', name: 'Carla'},
  {id: 'jess', name: 'Jess'},
  {id: 'sophie', name: 'Sophie'}
]

let messagesData = [
  {id: 1, message: 'Definitely in love with my lipstick!!!'},
  {id: 2, message: 'Hello,could you advice me a good perfume?'},
  {id: 3, message: 'What do you think about Chanel products?'},
  {id: 4, message: 'Hello everyone!!!'},
  {id: 5, message: 'Not sure I liked Chanel Coco Mademoiselle....'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
