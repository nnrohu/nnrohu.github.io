import './about.css';

import { FaAward } from 'react-icons/fa';
import Images from '../../utils/Images';
import React from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Images.me_about} alt='About me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
          <p>
            I have done most of the projects in Android using Java and Kotlin. 3
            Projects are in React Native using Javascript. 1 Spring Boot Project
            of myself.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
