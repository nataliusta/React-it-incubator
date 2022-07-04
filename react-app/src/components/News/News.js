import React from 'react';
import classes from './News.module.css';

const News = (props) => {
  return (
    <div className={classes.news}>
      <h1 className={classes.caption}>CHANEL NEWS</h1>
      <ul className={classes.newsList}>
        <li className={classes.item}>
          <img
            src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1653980242769-2.jpg"
            alt="Black and white girl and sea view"/>
          <span className={classes.date}>
            01 July 2022
          </span>
          <h2 className={classes.itemCaption}>
            Highlights 2022 Cannes film festival
          </h2>
          
          <p className={classes.description}>
            Ambassadors and friends of the House Kristen Stewart, Margaret
            Qualley and Anamaria Vartolomei stepped out on the red carpet of the
            75th Cannes Film Festival wearing CHANEL looks.
          </p>
        </li>
        <li className={classes.item}>
          <img
            src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1652819639479-fs8jpmhwqaawmx7.jpg"
            alt="Girl in pink"/>
          <span className={classes.date}>
            27 June 2022
          </span>
          <h2 className={classes.itemCaption}>
            The Chanel spring-summer 2022 ready-to-wear collection in '31 rue
            Cambon' magazine
          </h2>
          <p className={classes.description}>
            Models Blesnya Minher, Adit Priscilla, Jill Kortleve and HyunJi Shin
            featured in ‘31 rue Cambon’ CHANEL magazine in a series of
            photographs wearing looks from the CHANEL Spring-Summer 2022
            Ready-to-Wear collection, captured by Lea Colombo.
          </p>
        </li>
        <li className={classes.item}>
          <img
            src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1650560086082-webchanelxangelevirgileguinard8.jpg"
            alt="Black and white girl wearing short"/>
          <span className={classes.date}>
            23 June 2022
          </span>
          <h2 className={classes.itemCaption}>
            On stage with Angele
          </h2>
          <p className={classes.description}>
            Singer-songwriter and musician Angèle, a House ambassador since
            2020, wears CHANEL bespoke outfits throughout her "Nonante-Cinq
            Tour" starting from April 2022.Virginie Viard has specially
            designed, in collaboration with Angèle, all of her stage clothes,
            some of which are inspired by the CHANEL Spring-Summer 1995
            Ready-to-Wear collection. This unparalleled wardrobe features a
            dozen looks in a range of colours and materials, combining tweed
            with sequins, as well as accessories such as boots and sunglasses.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default News;
