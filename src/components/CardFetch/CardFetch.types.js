import PropTypes from "prop-types";

const CardPropsTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
}
export default CardPropsTypes