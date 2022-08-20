import PropTypes from 'prop-types'

const Button = ({text,color,onShowAdd}) => {
    
  return (
      
    <button onClick={onShowAdd} style={{backgroundColor:color}} className="btn">{text}</button>
  )
}
Button.defaultProps={
    color:'red'
}
Button.propTypes= {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button