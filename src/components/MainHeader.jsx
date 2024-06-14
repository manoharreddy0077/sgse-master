import { Link } from 'react-router-dom';
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#WorkIsWorship</h4>
          <h1>SiddaGanga Shree Enterprises</h1>
          <p>
            Our commitment is borne out of the experience gained since our inception. We are cognizant of the future demands by our Clients for only the highest standard of quality and a potentially higher competitive environment.
          </p>
          <Link to="/contact" className='btn lg'>Contact Us</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeader Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader