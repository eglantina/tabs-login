import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { FiLogIn } from "react-icons/fi";
import {HiEye , HiEyeSlash} from "react-icons/hi2";

export default function LoginCredenziali() {
  return (

    <Form>
      <Form.Group controlId="formBasicCf">
        <Form.Label>Codice fiscale:</Form.Label>
        <Form.Control type="cf" placeholder="" />
        
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
      <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="" aria-label=" " aria-describedby="button-addon2" />
          <button class="btn btn-outline-primary" type="button" id="button-addon2"> <HiEye /></button> 

      </div>
       
      </Form.Group>
  
      <Button  type="submit" class ="btn-accedi">
      <FiLogIn /> Accedi
        
      </Button >
      <div>
      <Row><a class="mt-3 mx-md-5" href="https://sister.agenziaentrate.gov.it/Main/SceltaServizioAccesso.do?tipo=M">Non sei ancora registrato?</a> </Row>
      <Row><a class="mt-3 mx-md-5" href="https://sister.agenziaentrate.gov.it/Main/SceltaServizioAccesso.do?tipo=M">Hai dimenticato la password?</a> </Row>
      
      </div>
    </Form>
  );
}