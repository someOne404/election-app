import PropTypes from 'prop-types';

export const ToolFooter = ({ companyName }) => {

  return (
    <footer>
      <small>&copy; {new Date().getFullYear()} {companyName}</small>
    </footer>
  );

};

ToolFooter.defaultProps = {
  companyName: 'Company Name Here',
};

ToolFooter.propType = {
  companyName: PropTypes.string.isRequired,
};