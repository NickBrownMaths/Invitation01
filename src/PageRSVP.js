import SymbolReel from "./SymbolReel";
import LinkButton from "./LinkButton";

function PageRSVP() {
  return (
    <div>
      <div className='BodyItem'>
        <p>
          The RSVP link has obviously not been set up yet, you impatient little rascals. Please don't click the button yet.
        </p>
        <LinkButton text='RSVP' onClick={() => { window.open('https://www.youtube.com/watch?v=eBGIQ7ZuuiU') }} />
        <SymbolReel />
      </div>

    </div>
  )
}

export default PageRSVP;