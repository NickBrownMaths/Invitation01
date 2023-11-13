import NavButton from "./NavButton";

function NavBar(props) {
  return (
    <div>
      <NavButton text='Save the date!' onClick={props.oc1} />
      <NavButton text='You are Invited!' onClick={props.oc2} />
      <NavButton text='Information' onClick={props.oc3} />
      <NavButton text='RSVP' onClick={props.oc4} />
    </div>
  )
}

export default NavBar;