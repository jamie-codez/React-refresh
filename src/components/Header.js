const Header = ({ title }) => {
  return (
    <header>{title}</header>
  )
}
Header.defaultProps = {
    title: 'Task tracker'
}

export default Header