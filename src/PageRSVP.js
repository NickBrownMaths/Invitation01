import SymbolReel from "./SymbolReel";
import LinkButton from "./LinkButton";

function PageRSVP() {
  return (
    <div>
      <div className='BodyItem'>
        <p>
          The RSVP link has obviously not been set up yet, you impatient little rascals. Please don't click the button yet.
        </p>
        <LinkButton text='RSVP' onClick={() => { window.open('https://fanciful-cactus-da52fa.netlify.app/') }} />
        <SymbolReel />
      </div>

    </div>
  )
}

export default PageRSVP;