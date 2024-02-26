import './Header.scss';
import Logo from '../../assets/header/logo_site.png'
import DarkLight from '../../assets/header/darkLight.svg'

function Header() {
  return <div className='header container'>
    <a className='logo_link' href="#">
      <img src={Logo} alt="" />
      <p>Product</p>
    </a>
    <nav className='nav'>
      <a className='active' href="#">Product</a>
      <a href="#">Customers</a>
      <a href="#">Pricing</a>
      <a href="#">Resources</a>
      <button className='first'>Sign In</button>
      <button className='second'>Sign Up</button>
      <a href="#">
        <img src={DarkLight} alt="Dark mode" />
      </a>
    </nav>
  </div>;
}

export default Header;
