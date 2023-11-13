import SymbolReel from "./SymbolReel";
import Divider from "./Divider";

function PageInfo() {
  return (
    <div className='BodyItem'>

      <p className='subtitle'>Date & Times</p>
      <p>
        26th of March 2024
        <br/>
        <br/>
        <table>
          <tr><td className="rightTable">Guests arrive: </td><td className="leftTable">12:00 - 12:30pm</td></tr>
          <tr><td className="rightTable">Main meal: </td><td className="leftTable">3:00pm approximately</td></tr>
          <tr><td className="rightTable">Evening Reception starts: </td><td className="leftTable">7:00pm approximately</td></tr>
          <tr><td className="rightTable">Finish by: </td><td className="leftTable">11:00pm</td></tr>
        </table>
      </p>

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

      <p className='subtitle'>Gifts</p>
      <p>
        Please do not bring a gift. We have lived together for many years; our drawers and cupboards are already full.
        <br />
        If you cannot contain yourself, please consider:
        <br />
        <br /> A charitable donation
        <br /> A gift for yourself
        <br /> A new accessory/hat/socks for your wedding outfit
        <br />
        <br />
        If you are bringing a card, please note that Robyn will retain Ms. as her title.
      </p>

      <Divider />

      <p className='subtitle'>Social Media</p>
      <p>
        Please do share photographs of yourselves on social media as much as you like; however, please do not upload photographs of Robyn and Nicholas.
      </p>


      <Divider />

      <p className='subtitle'>Children</p>
      <p>
        There is a small stream and bridge at the venue - these are are fenced off. Please dress your children in something cute, like little bowties.
      </p>

      <Divider />

      <p className='subtitle'>Day before & day after (optional)</p>
      <p>
        We will book a table at the Beefeater by Priory Marina at 18:30 on the 25th of March. All guests are welcome.
        Please let us know in your RSVP if you would like to be included in that booking.
        <br /><br />
        We would like to meet for a walk around the lake at Priory Park on the 27th of March at 1:00pm.
        All guests are welcome. Please meet by Cloverdale Retreat Caf{'\u{00E9}'}.
      </p>

      <SymbolReel />
    </div>
  )
}

export default PageInfo;