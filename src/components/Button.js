import PropTypes from 'prop-types';

const Button = ({ onClick, children, type }) => {
  return (
    <button
      type={type}
      className="px-4 py-2 border rounded-md text-white bg-gray-800 focus:bg-gray-700 mr-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
