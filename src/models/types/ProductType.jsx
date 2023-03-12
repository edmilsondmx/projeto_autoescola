import PropTypes from "prop-types";

const ProductType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.node,
  title: PropTypes.string,
  slang: PropTypes.string,
  sumary: PropTypes.string,
});

export default ProductType;
