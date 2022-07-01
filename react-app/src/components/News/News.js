import React from 'react';
import classes from './News.module.css';

const News = (props) => {
    return (
        <div className={classes.newsList}>
            <h1>CHANEL NEWS</h1>
            <div className={classes.item}>
                <img src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1653980242769-2.jpg' alt='Black and white girl and sea view' />
                <h2>
                    Highlights 2022 Cannes film festival
                </h2>
                <p>
                    Ambassadors and friends of the House Kristen Stewart,
                    Margaret Qualley and Anamaria Vartolomei stepped out
                    on the red carpet of the 75th Cannes Film Festival wearing CHANEL looks.
                </p>
            </div>
            <div className={classes.item}>
                <img src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1652819639479-fs8jpmhwqaawmx7.jpg' alt='Girl in pink' />
                <h2>
                    The Chanel spring-summer 2022 ready-to-wear collection in '31 rue Cambon' magazine 
                </h2>
                <p>
                    Models Blesnya Minher, Adit Priscilla, Jill Kortleve and HyunJi Shin featured in ‘31 rue Cambon’ 
                    CHANEL magazine in a series of photographs wearing looks from the CHANEL 
                    Spring-Summer 2022 Ready-to-Wear collection, captured by Lea Colombo.
                </p>
            </div>
            <div className={classes.item}>
                <img src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_672/FSH-CHN-1650560086082-webchanelxangelevirgileguinard8.jpg' alt='Black and white girl wearing short' />
                <h2>
                    On stage with Angele
                </h2>
                <p>
                    Singer-songwriter and musician Angèle, a House ambassador since 2020, wears CHANEL bespoke outfits throughout her "Nonante-Cinq Tour" 
                    starting from April 2022.Virginie Viard has specially designed, in collaboration with Angèle, all of her stage clothes, some of which 
                    are inspired by the CHANEL Spring-Summer 1995 Ready-to-Wear collection. This unparalleled wardrobe features a dozen looks in a range 
                    of colours and materials, combining tweed with sequins, as well as accessories such as boots and sunglasses.
                </p>
            </div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
        </div>
    )
}

export default News;