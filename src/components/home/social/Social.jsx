import React from "react"
import Heading from "../../common/Heading"
import "./social.css"

const Social = () => {
  return (
        <section className='social padding'>
          <Heading title='Social Media' subtitle='Follow Us On' />
          <div className='content grid4 mtop'>
            <div className='box'>
              <div className='icon'>
              <a href = 'https://www.instagram.com/'><i class='fab fa-instagram'></i></a>
              </div>
              <h1>tuvindiahomes</h1>
              <p>Instagram</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'https://www.facebook.com/'><i class='fab fa-facebook-f'></i></a>
              </div>
              <h1>tuvindiahomes</h1>
              <p>Facebook</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'https://www.youtube.com/'><i class="fab fa-youtube"></i></a>
              </div>
              <h1>tuvindiahomes</h1>
              <p>Youtube</p>
            </div>
            <div className='box'>
              <div className='icon'>
                <a href = 'https://www.twitter.com/'><i class='fab fa-twitter-square'></i></a>
              </div>
              <h1>tuvindiahomes</h1>
              <p>Twitter</p>
            </div>
          </div>
        </section>
    )
}

export default Social
