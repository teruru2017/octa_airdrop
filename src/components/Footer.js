import { FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import LoadSpinner from './loadSpinner';

const Footer = () => {
  return (
    <><style jsx>
      {`.main-content{
      margin-top:90px 
     
    }`}
    </style>
    <div className='main-content'>
    <div className='container'>
        <footer className='mt-3 py-2'>
          <ul className='nav justify-content-center border-top'>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <img src="/logo.png" alt="" height={20} />

              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <FaFacebook />
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <FaTwitter />
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <FaInstagram />
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <FaDiscord />
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link px-2 text-white'>
                <small><small>Contact us</small></small>
              </a>
            </li>
          </ul>
          <p className='text-center text-white'><small><small>Copyright © 2021 OCTA Web, Inc</small></small></p>
          <LoadSpinner />
        </footer>
      </div>
      </div>
      </>
  );
};

export default Footer;
