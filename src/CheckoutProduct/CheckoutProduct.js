import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className='checkoutproduct'>
      <img
        className='checkout-product-image'
        src={image}
        alt='checkout product'
      />

      <div className='checkoutproduct-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='checkout-product-rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
    </div>
  );
};

export default CheckoutProduct;
