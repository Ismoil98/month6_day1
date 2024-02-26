import './Main.scss';
import icon1 from '../../assets/main/icon1.png'
import icon2 from '../../assets/main/icon2.png'
import icon3 from '../../assets/main/icon3.png'
import icon4 from '../../assets/main/icon4.png'

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
  </div>;
}

export default Main;
