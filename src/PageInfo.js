import SymbolReel from "./SymbolReel";
import Divider from "./Divider";

function PageInfo() {
  return (
    <div className='BodyItem'>
      <p className='subtitle'>Date, Time & Address</p>
      <p>Will let you know once we've booked a place.</p>

      <Divider />

      <p className='subtitle'>Dress</p>
      <p>Optional, but preferred.</p>

      <Divider />

      <p className='subtitle'>Children</p>
      <p>Welcome and encouraged to attend! Please dress them in something cute. Like little bowties. For real.</p>

      <Divider />

      <p className='subtitle'>Dinner</p>
      <p>There will be some.</p>

      <Divider />

      <p className='subtitle'>Photography</p>
      <p>There could well be some.</p>

      <Divider />

      <p className='subtitle'>Any other business</p>
      <p>Not as yet.</p>

      <SymbolReel />
    </div>
  )
}

export default PageInfo;