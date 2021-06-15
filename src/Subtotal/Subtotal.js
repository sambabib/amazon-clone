import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../src/reducer'
import './Subtotal.css';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This Order contains a small gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
