import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './Header.css';

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header-logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon'
        />
      </Link>
      <div className='header-search'>
        <input className='header-search-input' type='text' />
        <SearchIcon className='header-search-icon' />
      </div>
      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-option-lineOne'>Hello Guest</span>
          <span className='header-option-lineTwo'>Sign In</span>
        </div>
        <div className='header-option'>
          <span className='header-option-lineOne'>Returns</span>
          <span className='header-option-lineTwo'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-option-lineOne'>Your</span>
          <span className='header-option-lineTwo'>Prime In</span>
        </div>
        <Link to='/checkout'>
          <div className='header-cart'>
            <ShoppingBasketIcon />
            <span className='header-option-lineOne header-cart-number'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
