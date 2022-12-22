const Header = (props) => {
  return (
    <header>{props.title}</header>
  )
}
Header.defaultProps = {
    title: 'Task tracker'
}

export default Header