import './CardFetch.css'
import CardPropsTypes from './CardFetch.types'


const DEFAULT = "https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-vector-40343347.jpg"
function CardFetchProps({ id, name, description, url, image = DEFAULT }) {
    return (
        <div className='cardStyle'>
            <div className='cardHeader'>
                <img src={image} alt="imagen" width={200} />
            </div>
            <div className='cardContent'>
                <p>{id}</p>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </div>
        </div>
    )
}

CardFetchProps.propTypes = CardPropsTypes;

export default CardFetchProps