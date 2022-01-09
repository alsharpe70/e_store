import React from 'react'
import './Home.css'
import group from './images/group.jpg'
import Product from './Product.js'
import tShirt from './images/tShirt.JPG'
import gray from './images/gray.jpeg'
import bear from './images/Bear.webp'


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src={group}
                    alt="group-img"
                />

                <div className="home_row">
                    
                    
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={tShirt}
                        rating={5}
                    />
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={gray}
                        rating={5}
                    />
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={bear}
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={tShirt}
                        rating={5}
                    
                    />
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={tShirt}
                        rating={5}
                    />
                    <Product
                        id="4534634"
                        title="T-shirt"
                        price={30}
                        image={tShirt}
                        rating={5}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Home
