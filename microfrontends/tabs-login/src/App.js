import TabElement from './components/TabElement';
import UncontrolledExample from './components/Slider';
import  logoConsap from './icone/logoConsapHeader.png';
import './App.css';


function App({config}) {

  return (
      <div className="conteiner">
          <div>
          <img
          src={logoConsap} 
          alt=" slide"
        />
          <UncontrolledExample />
          <TabElement config={config}/>
          </div>
      
      </div>
  );
}

export default App;
