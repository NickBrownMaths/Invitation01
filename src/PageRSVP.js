import SymbolReel from "./SymbolReel";
import LinkButton from "./LinkButton";

function PageRSVP() {
  return (
    <div>
      <div className='BodyItem'>
        <p>
          The RSVP link has not been set up yet. This page will be updated when the invite is ready.
        </p>
        <LinkButton text='RSVP' onClick={() => { window.open('https://fanciful-cactus-da52fa.netlify.app/') }} />
        <SymbolReel />
      </div>
    </div>
  )
}

export default PageRSVP;