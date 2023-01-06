function LinkButton(props) {
  return (
    <button className='LinkButton' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default LinkButton;