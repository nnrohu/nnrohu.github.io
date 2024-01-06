import "./Experience.css";

import { BsPatchCheckFill } from "react-icons/bs";
import React from "react";

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React Native</h4>
                <small className='text-light'>4+ Years Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Android Developer</h4>
                <small className='text-light'>2+ Years Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className='experience__frontend'>
          <h3>Backend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>6 Months Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
