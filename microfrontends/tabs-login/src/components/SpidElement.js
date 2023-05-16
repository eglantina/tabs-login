import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiUserCircle , HiEyeSlash} from "react-icons/hi2";
import Row from 'react-bootstrap/Row';
import '../style/style.css';
import {useState} from "react";


const API_PATH = '/api/example'
export default function SpidLogin({config}){

  const {systemParams} = config || {};
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
  }

return (
  <div>
   
    <p>SPID, il Sistema Pubblico di Identità Digitale, è il sistema di accesso che consente di utilizzare, 
    con un'identità digitale unica, i servizi online della Pubblica Amministrazione e dei privati accreditati. 
    Se sei già in possesso di un'identità digitale, accedi con le credenziali del tuo gestore. Se non hai ancora un'identità digitale, 
    richiedila ad uno dei gestori.</p> 


    <div className="contenitore">
      <div className="colonne">
       <Row><a class="mt-3 mx-md-5" href="https://www.spid.gov.it/">Maggiori informazioni su SPID</a> </Row>
        <Row><a class="mt-3 mx-md-5" href="https://test-www.spid.gov.it/ottieni-assistenza-dagli-identity-provider/">Non hai SPID?</a> </Row>
        <Row><a class="mt-3 mx-md-5" href="https://www.spid.gov.it/cos-e-spid/come-attivare-spid/">Serve aiuto?</a> </Row> </div>

        <div className="colonne">
        <Button as="a" className='btn-login' onClick={callTheApi}>
          <HiUserCircle /> Entra con SPID</Button></div>

      
    </div>
  </div>
);
}