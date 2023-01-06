import PageSTD from "./PageSTD"
import PageInv from "./PageInv"
import PageInfo from "./PageInfo"
import PageRSVP from "./PageRSVP"

function WeddingPageBody(props) {
  if (props.currentTab == 'STD') {
    return <PageSTD />
  } else if (props.currentTab == 'inv') {
    return <PageInv />
  } else if (props.currentTab == 'info') {
    return <PageInfo />
  } else {
    return <PageRSVP />
  }
}
export default WeddingPageBody