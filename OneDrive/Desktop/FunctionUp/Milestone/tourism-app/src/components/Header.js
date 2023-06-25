import React from 'react'

const Header = () => {
  return (
    <>
    <header>
    <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
             <h1 className="display-2">Mountain Majesty: Unveiling Nature's Masterpieces <br/> For You</h1>
             <p className="main-hero-paraa">Embark on a transformative journey through Uttarakhand's majestic landscapes, where nature unveils its breathtaking masterpieces at every turn. <br/><br/>
                                           Discover the hidden gems of Uttarakhand as our expert guides unveil the secrets of this mystical land, from ancient temples to adrenaline-pumping adventures.</p>
               
               
          </div>

          

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./Images/bg1.jpg " alt="hero1" className="img-fluid main-hero-img1"/>
              <img src="./Images/bg.jpg" alt="hero2" className="img-fluid main-hero-img2" />

            </div>
        </div>

    </section>
    </header>
    </>
  )
}

export default Header