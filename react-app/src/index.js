import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {Provider} from './StoreContext';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
  );
}

rerenderEntireTree();

/*store.subscribe(() => {
    rerenderEntireTree();
});*/

reportWebVitals();
