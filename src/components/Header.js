import Button from "./Button"


const Header = ({title,onShowAdd,isShowing}) => {
  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button text={isShowing ? 'close':"Add"} color={isShowing ? 'red':"green"} onShowAdd={onShowAdd}/>
    </header>
  )
}

export default Header