import './App.css';
import NavBar from './NavBar';
import WeddingHeader from './WeddingHeader';
import WeddingPageBody from './WeddingPageBody';
import { useState } from 'react';


function App() {

  const [currentTab, setcurrentTab] = useState('STD');

  return (
    <div className='App'>
      <WeddingHeader />
      <NavBar
        oc1={() => setcurrentTab('STD')}
        oc2={() => setcurrentTab('inv')}
        oc3={() => setcurrentTab('info')}
        oc4={() => setcurrentTab('RSVP')}
      />
      <WeddingPageBody
        currentTab={currentTab}
      />
    </div>
  )
}

export default App;
