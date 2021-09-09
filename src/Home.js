import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                className="home__image"
            />
            <div className="home__row">
                <Product
                    id="123456"
                    title="Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance"
                    price={113.49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ySu55JzAL._AC_SX466_.jpg"
                />
                <Product
                    id="B079QHML21"
                    title="Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release
                    h G Pro Wireless Gaming Mouse with Esports Grade Performance"
                    price={39.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61mAA2BB-FL._AC_SX679_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="B07XJ8C8F7"
                    title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
                    price={1144.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61lHou2GzvL._AC_SX679_.jpg"
                />
                <Product
                    id="B07FZ8S74R"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61MZfowYoaL._AC_SX679_.jpg"
                />
                <Product
                    id="B08FWV5T28"
                    title="Binoculars 15x25, HD Professional/Waterproof Binoculars with Low Light Night Vision, Durable & Clear BAK4 Prism FMC Lens Binoculars. Suitable for Outdoor Sports and Concert, Bird Watching"
                        price={47.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/619pOVIxwIS._AC_SX466_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="B07DGR98VQ"
                    title="Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White - WYZECP1"
                    price={37.97}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61PzG7B2VbL._AC_SX679_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
