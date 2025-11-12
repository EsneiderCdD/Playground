
import CardPropsTypes from './CardFetch.types'

const DEFAULT =  "https://cdn.vectorstock.com/i/500p/33/47/no-photo-available-icon-vector-40343347.jpg"
function CardFetchProps({ id, name, description, url, image = DEFAULT }) {
    return (
        <div>
            <img src={image} alt="imagen" width={200} />
            <p>{id}</p>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
    )
}

CardFetchProps.propTypes = CardPropsTypes;

export default CardFetchProps