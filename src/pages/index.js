import React from 'react';
import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.jpeg';
import pic6 from '../assets/images/pic06.jpg';
import config from '../../config';
import Slider1 from "../components/Slider1";
import image from "../assets/images/Logo-Blue-White1.png"
import image2 from "../assets/images/cheapbl.png"

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="image">
          <img src={image} alt="logo" />
        </div>
        <p>
          <a href="https://github.com/stolzz0613">Stay With Friends</a>
        </p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Explore
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-coins major style1">
              <span className="label"></span>
            </span>
            <p><b >CHEAPEST PRICE GUARANTEED <br /> IF BOOKED DIRECTLY</b></p>
          </li>
          <li>
            <span className="icon solid fa-clock major style1">
              <span className="label">Ipsum</span>
            </span>
            <p><b >SELF CHECK-IN/BREAKFAST<br />TO OFFER FLEXIBILITY</b></p>
          </li>
          <li>
            <span className="icon solid fa-home major style1">
              <span className="label">Dolor</span>
            </span>
            <p><b >3 DIFFERENT LOCATIONS  <br /> 10 MINUTES FROM DOWNTOWN</b></p>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>AS AN AVID TRAVELLER I WANTED TO CREATE A HOME THAT WELCOMES PEOPLE FROM ALL OVER THE WORLD</h2>
          <h5>ZENO DISCOVERED ICELAND IN 2006 AND HAS SETTLED EVER SINCE</h5>
          <p><span className="image left"><img src={pic6} alt="" /></span>

              For over 11 years I am lucky to welcome guests from all over the globe.

              In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarness, where my houses are located. The peaceful neighbourhood gives a glimpse of the vast nature Iceland has to offer. Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park, Grótta Lights and the all so popular northern lights are things to be seen here. If you want to enjoy the culture of Reykjavik, a 20-minute walk is all it takes to get to the Downtown area with a variety of museums, restaurants and bars.

              In the humble beginnings in 2009 I renovated the House myself and became a popular travellers spot right away. Now we offer on 3 locations a wide selection from cosy Economy Rooms to Family Apartments to an incredible sea view at our Grótta Northern Lights Apartment.

              I hope that my team and I can welcome you soon and help you on your travels in Iceland. If you have any questions before your arrival use our live chat! Remember that the cheapest price is only guaranteed directly through our website..
          </p>
        </header>

      </div>
    </section>

    <section id="cta" className="wrapper style2 special">
      <Slider1
        slides={slides}
      />
    </section>
  </Layout >
);

export default IndexPage;
