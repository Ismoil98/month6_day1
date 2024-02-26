import './Hero.scss';
import HiroImg from '../../assets/hiro/amico.png'

function Hero() {
  return <div className='hero container'>
    <div className='content'>
      <h1 className='title'>
      Work at the speed of thought
      </h1>
      <p className='text'>
      Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
      </p>
      <span>
        <button className='first'>
          Get started
        </button>
        <button className='second'>
          Watch the Video
        </button>
      </span>
    </div>
    <img src={HiroImg} alt="hiro image" />
  </div>;
}

export default Hero;
