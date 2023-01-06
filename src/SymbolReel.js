import SymbolDancing from "./SymbolDancing";
import SymbolFood from "./SymbolFood";
import SymbolHeart from "./SymbolHeart";
import SymbolMusic from "./SymbolMusic";
import SymbolRing from "./SymbolRing";
import SymbolSpeech from "./SymbolSpeech";

function SymbolReel(props) {
  return (
    <div className='SymbolReel'>
      <SymbolHeart />
      <SymbolRing />
      <SymbolSpeech />
      <SymbolFood />
      <SymbolMusic />
      <SymbolDancing />
    </div>
  )
}

export default SymbolReel;