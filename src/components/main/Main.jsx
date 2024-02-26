import './Main.scss';
import icon1 from '../../assets/main/icon1.png'
import icon2 from '../../assets/main/icon2.png'
import icon3 from '../../assets/main/icon3.png'
import icon4 from '../../assets/main/icon4.png'
import strategies1 from '../../assets/main/strategies1.png'
import strategies2 from '../../assets/main/strategies2.png'
import strategies3 from '../../assets/main/strategies3.png'


function Main() {
  return <div className='main'>
    <div className='product container'>
      <h2 className='title'>
      Product  was Built Specifically for You
      </h2>
      <ul className='list'>
        <li className='item'>
          <img src={icon1} alt="" />
          <h3>
            First click tests
          </h3>
          <p>
            While most people enjoy casino gambling,
          </p>
        </li>
        <li className='item'>
          <img src={icon2} alt="" />
          <h3>
          Design surveys
          </h3>
          <p>
          Sports betting, lottery and bingo playing for the fun
          </p>
        </li>
        <li className='item'>
          <img src={icon3} alt="" />
          <h3>
          Preference tests
          </h3>
          <p>
          The Myspace page defines the individual.
          </p>
        </li>
        <li className='item'>
          <img src={icon4} alt="" />
          <h3>
          Five second tests
          </h3>
          <p>
          Personal choices and the overall personality of the person. 
          </p>
        </li>
      </ul>
      <button className='sign'>
        SIGN UP NOW
      </button>
  </div>
  <div className='strategies container'>
    <h2 className='title'>
    Contents Strategies
    </h2>
    <p className='info'>
    We focus on ergonomics and meeting you where you work. It's only a keystroke away. 
    </p>
    <ul className='list'>
      <li className='item'>
        <img src={strategies1} alt="" />
        <div>
          <p>By Wahid Ari |  03 March 2019</p>
          <h3>
          Increasing Prosperity With Positive Thinking
          </h3>
        </div>
      </li>
      <li className='item'>
        <img src={strategies2} alt="" />
        <div>
          <p>By Wahid Ari |  03 March 2019</p>
          <h3>
          Increasing Prosperity With Positive Thinking
          </h3>
        </div>
      </li>
      <li className='item'>
        <img src={strategies3} alt="" />
        <div>
          <p>By Wahid Ari |  03 March 2019</p>
          <h3>
          Increasing Prosperity With Positive Thinking
          </h3>
        </div>
      </li>
    </ul>
  </div>
  <div className='price container'>
    <h2>Price Table</h2>
    <p>We offer competitive price</p>
    <ul className='list'>
      <li className='item'>
        <h3>
          Free
        </h3>
        <p>Brief price description</p>
        <div>
          <p className='proses'>
            0
          </p>
          <data>
          Per / month
          </data>
        </div>
        <p>Only 2 Operators</p>
        <p>Notifications</p>
        <p>Landing Pages</p>
        <button>
          Order Now
        </button>
      </li>
      <li className='item'>
        <h3>
          Free
        </h3>
        <p>Brief price description</p>
        <div>
          <p className='proses'>
            0
          </p>
          <data>
          Per / month
          </data>
        </div>
        <p>Only 2 Operators</p>
        <p>Notifications</p>
        <p>Landing Pages</p>
        <button>
          Order Now
        </button>
      </li>
      <li className='item'>
        <h3>
          Free
        </h3>
        <p>Brief price description</p>
        <div>
          <p className='proses'>
            0
          </p>
          <data>
          Per / month
          </data>
        </div>
        <p>Only 2 Operators</p>
        <p>Notifications</p>
        <p>Landing Pages</p>
        <button>
          Order Now
        </button>
      </li>
    </ul>
  </div>
  <div className='clients container'>
    <h2>
    What Clients Say
    </h2>
    <p>
    Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics 
    </p>
    <ul>
      <li></li>
    </ul>
  </div>
  </div>;
}

export default Main;
