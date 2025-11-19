import PropTypes from "prop-types";

const DevToolPayloadTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default DevToolPayloadTypes