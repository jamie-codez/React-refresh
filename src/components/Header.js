import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </header>
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