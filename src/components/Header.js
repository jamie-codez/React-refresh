import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header style={{color:'red',backgroundColor:'blanchedalmond'}}>{title}</header>
  )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header