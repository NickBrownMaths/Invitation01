import SymbolReel from "./SymbolReel";
import LinkButton from "./LinkButton";

function PageRSVP() {
  return (
    <div>
      <div className='BodyItem'>
        <p>
          Please RSVP using the button below. There is a short form to fill in once for each guest.
        </p>
        <LinkButton text='RSVP' onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSe0tuAkQkC4anvHte9RUtMyx6yuuWXdibXQaDAHdb-r9q2c0w/viewform') }} />
        <SymbolReel />
      </div>
    </div>
  )
}

export default PageRSVP;