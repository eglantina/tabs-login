import Tab from  'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpidLogin from './SpidElement';
import CIELogin from './CieElement';
import EidasLogin from './EidasElement';
import LoginCredenziali from './Credenziali';
import spid_icone from '../icone/spid_icon.png';
import  cie  from "../icone/cie.png";
import  eidas  from "../icone/eidas.png";
import  credenziali  from "../icone/credenziali.png";


export default function TabElement({config}) {
  
  return (

    
   
    <Tabs
      defaultActiveKey="cie"
      id="uncontrolled-tab-example"
     >

      <Tab eventKey="spid" title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src={spid_icone} 
                            style={{ width: '20px' }}
                            alt=""
                        /> SPID
                        </div> }  >
                        <SpidLogin config={config}/></Tab> 
     

      <Tab eventKey="cie" title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src= {cie }
                            style={{ width: '45px' }}
                            alt=""
                        /> CIE
                        </div> }  > 
                        <CIELogin />
  
      </Tab>
      <Tab eventKey="eidas" title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src= {eidas}
                            style={{ width: '20px' }}
                            alt=""
                        /> eIDAS
                        </div> }  > 
      <EidasLogin />
     
      </Tab>
      <Tab eventKey="credenziali" title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src= {credenziali}
                            style={{ width: '20px' }}
                            alt=""
                        /> Credenziali
                        </div> }  > 
        <LoginCredenziali />
      </Tab>

    </Tabs> 
 
  );
}
