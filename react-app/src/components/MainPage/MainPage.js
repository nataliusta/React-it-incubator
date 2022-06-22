import React from "react";
import './MainPage.css';
import Posts from './Posts/Posts.js';

function MainPage() {
    return (
      <div>
        <div>
          <img src='https://tdf-asia.com/wp-content/uploads/2021/01/in-store-display_TDF-visual-merchandising-manufacturer.jpg' alt='Chanel store' />
        </div>
        <Posts />
      </div>
    )
}

export default MainPage;