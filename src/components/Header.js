import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header style={headerStyle}>{title}</header>
  )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

const headerStyle = {
    color:'red',
    backgroundColor:'black'
}

export default Header