import TabElement from './components/TabElement';
//import {useState} from "react";
import './App.css';


/*function App() {
  return (
    <div className="App">
     <TabElement />
    </div>
  );
}*/
//const API_PATH = '/api/example'

function App({config}) {
  /*const {systemParams} = config || {};
  const { api } = systemParams || {};
  const url = api && api["cie-api"].url

  const [payload, setPayload] = useState("")

  async function callTheApi() {
      try {
          const apiResponse = await fetch(url + API_PATH);

          if (apiResponse.ok) {
              const apiJson = await apiResponse.json();
              setPayload(<>{apiJson.payload}</>);
          } else {
            alert('Work in progress!');
          }
      } catch (error) {
          //setPayload(error.message);
          alert('Work in progress!');
      }
  }*/

  return (
      <div className="App">
          <div>
          <TabElement config={config}/>
          </div>
      
      </div>
  );
}

export default App;
