import SymbolReel from "./SymbolReel";
import Divider from "./Divider";

function PageInfo() {
  return (
    <div className='BodyItem'>
      <p className='bigsubtitle'>Information</p>

      <Divider />

      <p className='subtitle'>Date & Time</p>
      <p>26th of March 2024. The schedule has not yet been confirmed with the venue; arrival times will be given with the invitation.</p>

      <Divider />

      <p className='subtitle'>Venue</p>
      <p>
        The wedding ceremony and reception will be held at: <br /> Bassmead Manor Barns <br /> PE19 5JB
        <br /> <br />
        Car parking is available onsite. The venue is quite remote, and not within walking distance of any public transport.
      </p>

      <Divider />

      <p className='subtitle'>Accomodation</p>
      <p>
        There are many places to stay in Bedford, St. Neots, and the surrounding area. We reccomend the Premier Inn at Priory Marina, Bedford.
        It is next to a lovely lake, and close to our house.
      </p>

      <Divider />

      <p className='subtitle'>Dress</p>
      <p>
        Please wear smart attire. We encourage bright colours, especially for socks. Please also consider that this will be in
        England in March (you may need a raincoat or sunglasses or both).
      </p>

      <Divider />

      <p className='subtitle'>Children</p>
      <p>
        There is a small stream and bridge at the venue - these are are fenced off. Please dress your children in something cute, like little bowties.
      </p>

      <SymbolReel />
    </div>
  )
}

export default PageInfo;