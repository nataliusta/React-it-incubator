import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} addComment={store.addComment.bind(store)} 
                 updateNewTextComment={store.updateNewTextComment.bind(store)} />
        </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
