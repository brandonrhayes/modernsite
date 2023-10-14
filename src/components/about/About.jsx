import React from 'react'
import './about.scss'
import ME from '../../assets/images/Brandon-talk-data.JPG'
import {FaUserNinja} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'


const About = () => {
  return (
    <>
       <section id='about'>
        <h5>I like the outdoors and making people smile...</h5>
        <h2>About Me</h2>
        
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Me" />
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaUserNinja className='about__icon'/>
                <h5>Product Management</h5>
                <small>2+ Years Creating Exceptional Products & Outstanding UXs</small>
              </article>

              <article className='about__card'>
                <FaUsers className='about__icon'/>
                <h5>Organizational Leadership</h5>
                <small>5+ Years Leading to Excellence & 15+ Years Leading by Example</small>
              </article>

              <article className='about__card'>
                <FaUserSecret className='about__icon'/>
                <h5>Process Improvement</h5>
                <small>6+ Years Devising Processes that make People Smile Profoundly</small>
              </article>

            </div>

            <div class="panel-wrapper">
              <a href="#show" class="show btn2" id="show">Continue Reading</a> 
              <a href="#hide" class="hide btn2" id="hide">Hide</a> 
              <div class="panel">
                <p>I was born and raised in a small town near the shoreline of Lake Huron, one of Canada's Great Lakes. Hearing the waves crash against the coast as the warm sand rippled between my toes was always something I took for granted. My simple life growing up led to many fond memories of adventures with friends, and I carry that simplicity into everything I do today. <br/><br/>

                  But after a while, the familiar waters grew stale. It was the exploration that excited me. I needed something to challenge my fortitude while delivering the thrill of a new adventure. I was curious about everything, and that curiosity fueled my desire to learn; I wanted to become the best version of myself.<br/><br/> 

                  Along my journey, I quickly realized that life's not all about me and being a better me. I discovered that life isn't much without others. And that led me to understand what I really wanted - my true purpose - was to inspire others as they chase their greatest dreams, just like I'm so fortunate to do today.<br/><br/>

                  And I'm thankful I learned that lesson while young; life's not all about me and being a better me. We're social creatures, and we need others to be ourselves. So, while I love creating products and processes that improve the lives of others, I've realized one of my superior strengths is acting as a stabilizing force among others, one that can offer solid direction amid adversity. Simply put, I like making people smile.

                  I'm always happy to chat about life, developing outstanding user experiences, high-performing teams, philosophy, self-improvement, big-picture ideas, and the great outdoors. I enjoy meeting new people, so let's talk!  <br/><br/>
                  
                  What inspires you to do what you do?
                </p>
              </div>
              <div class="fade  fade-out"></div>
            </div>  
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
       </section>
    </>
  )
}

export default About