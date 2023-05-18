import React from 'react'
import '../styles/home.css'
import image from '../images/home_image.jpg'
import { Redirect } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div className="left">
                <div className="title">
                    <h2>Spark Your Financial Future</h2>
                </div>
                <div className="desc">
                    <p>Spark Foundation Bank - Empowering Your Financial Journey. Discover innovative banking solutions with personalized support from our experienced professionals. Convenient online banking tools and exceptional customer service make managing your finances easy and accessible. Achieve your financial goals with Spark Foundation Bank..</p>
                </div>
                <button className='start-btn'>
                    <a href="/allCustomers">
                        Get Started
                    </a>
                </button>
                <div className="gradient-border ">
                    <p>Transactions done : 106824</p>
                </div>
            </div>
            <div className="right">
                <img src={image} alt="Bank img" />
            </div>
        </div>
    )
}

export default Home