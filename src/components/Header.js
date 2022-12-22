import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>{title}</header>
  )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

// CSS in JS
// const headerStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header