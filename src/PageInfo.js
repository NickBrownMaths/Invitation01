import SymbolReel from "./SymbolReel";
import Divider from "./Divider";

function PageInfo() {
  return (
    <div className='BodyItem'>
      <p className='bigsubtitle'>This information page will be updated with full details when the invite is ready.</p>

      <Divider />

      <p className='subtitle'>Date, Time & Address</p>
      <p>26th of March 2024. The venue will be in Cambridgeshire.</p>

      <Divider />

      <p className='subtitle'>Children</p>
      <p>Will be invited and encouraged to attend! Please dress them in something cute. Like little bowties. For real.</p>

      <SymbolReel />
    </div>
  )
}

export default PageInfo;