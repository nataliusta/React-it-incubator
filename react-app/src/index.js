import reportWebVitals from './reportWebVitals';
import state from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addComment, updateNewTextComment } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} addComment={addComment} updateNewTextComment={updateNewTextComment} />
        </React.StrictMode>
  );
}

rerenderEntireTree(state);

reportWebVitals();
