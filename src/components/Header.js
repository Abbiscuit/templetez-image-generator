import PropTypes from 'prop-types';

const Header = ({ href, title }) => {
  return (
    <header className="bg-gray-50 border-b h-16 mb-24 flex items-center">
      <a href={href} className="inline-block px-4 py-2 font-semibold">
        {title}
      </a>
    </header>
  );
};

export default Header;

Header.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
