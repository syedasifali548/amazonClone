import { RssFeed } from '@material-ui/icons'
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home_row">
                    <Product
                        id={123454}

                        title="Save $30 on Select Ray-Ban & Oakley Polarized Sunglasses"
                        price={50.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg
  '                   rating={5}
                    />

                    <Product
                        id={123455}

                        title="Dreaming Wapiti Duvet Cover 
                     King,             100% Washed"
                        price={40.99}
                        image='https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL480_FMwebp_QL65_.jpg
  '                   rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={123451}
                        title="Save $80 on Select Ray-Ban & Oakley Polarized Sunglasses"
                        price={50.99}
                        image='https://m.media-amazon.com/images/I/71ywy0tUZqL._AC_UL480_FMwebp_QL65_.jpg
'                   rating={5}
                    />
                    <Product
                        id={123452}
                        title="Save $70 on Select Ray-Ban & Oakley Polarized Sunglasses"
                        price={50.99}
                        image='https://m.media-amazon.com/images/I/71q9UvDd2TL._AC_UL480_FMwebp_QL65_.jpg
'                   rating={3}
                    />
                    <Product
                        id={123453}
                        title="You can Select Ray-Ban & Oakley Polarized Sunglasses"
                        price={10.99}
                        image='https://m.media-amazon.com/images/I/91dWA0DUZSL._AC_UL480_FMwebp_QL65_.jpg
'                   rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={123456}

                        title="Save $50 on Select Ray-Ban & Oakley Polarized Sunglasses"
                        price={120.99}
                        image='https://m.media-amazon.com/images/I/71dqjxW8g5L._AC_UL480_FMwebp_QL65_.jpg
'                   rating={5}
                    />
                </div>

            </div>


        </div>
    )
}

export default Home
