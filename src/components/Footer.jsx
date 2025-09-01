import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'; // Import specific icons

const Footer = () => {
  return (
    <footer className='bg-gray-200 p-4'>
      <div className='container mx-auto flex flex-col items-center text-gray-700'>
        <h2 className='text-xl font-bold mb-2'>Logo</h2>
        <div className='flex space-x-4 mb-2'>
          <FontAwesomeIcon
            icon={faTwitter}
            className='w-5 h-5 text-gray-700 hover:text-gray-900'
          />{' '}
          {/* Twitter bird */}
          <FontAwesomeIcon
            icon={faFacebookF}
            className='w-5 h-5 text-gray-700 hover:text-gray-900'
          />{' '}
          {/* Facebook f */}
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className='w-5 h-5 text-gray-700 hover:text-gray-900'
          />{' '}
          {/* LinkedIn in */}
        </div>
        <ul className='flex space-x-4 text-sm'>
          <li>
            <a href='#' className='hover:text-gray-900'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-900'>
              Authors
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-900'>
              Archive
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-900'>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-900'>
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
