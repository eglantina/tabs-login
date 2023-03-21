
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EidasLogin(){
return (
    <div>
    <p>L’autenticazione eIDAS è un primo importante passo verso l'integrazione dei servizi erogati dalle pubbliche amministrazioni dell'Unione Europea.

        Il Regolamento comunitario 23/07/2014, n. 910/2014 In materia di identificazione elettronica e servizi fiduciari per le transazioni 
        elettroniche nel mercato interno e che abroga la direttiva 1999/93/CE, conosciuto come Regolamento eIDAS, 
        promuove la cooperazione transfrontaliera e l’interoperabilità dei sistemi nazionali d'identificazione elettronica (eID), 
        per facilitare l'accesso dei cittadini e delle imprese ai servizi pubblici digitali nei diversi Stati membri in cui tale accesso è 
        consentito tramite l'autenticazione eID. </p>

    <Button as="a" variant="primary">
    Entra con eIDAS
    </Button>
    
    </div>
);
}
