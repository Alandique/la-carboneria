
import './styles.css';
const Item = ({title, description, price, image, quantity}) => {
  return (
    <div className="card-container">
        <h6 className="card-title"><title></title></h6>
        <img src={image} alt={title} width={100} />
        <div className="card-description">
            <p>{description}</p>
            {quantity && <span>Cantidad: {quantity}</span>}
          
        </div>

        <p>${price}</p>
    </div>
  )
}

export default Item