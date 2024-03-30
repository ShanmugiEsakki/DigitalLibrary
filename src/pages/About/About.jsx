import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Chapter One</h2>
            <p className='fs-17'>Welcome to our online book emporium, where the literary world comes to life at your fingertips! Immerse yourself in the boundless realms of knowledge and imagination as you explore our meticulously curated online book store.

<br/><br/>Discover a vast collection that spans genres, from gripping thrillers and heartwarming romances to mind-bending science fiction and scholarly non-fiction. Whether you're an avid reader seeking the latest bestsellers or a connoisseur of niche genres, our digital shelves are stocked with literary treasures to cater to every taste.</p>
            <p className='fs-17'><b>Voice of Books!!!</b></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
