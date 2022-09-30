import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../styles/reclamation.css"
function ReclamerProduit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialState = {
    reference:'',
    type:'',
    etablissement:'',
    region:''
   }
   const [reference , setReference] = useState('');
   const [type, setType] = useState('');
   const [etablissement, setEtablissement] = useState('');
   const [region, setRegion] = useState('');
   const [reclamation, setReclamation] = useState(initialState);

   const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    console.log('reclamation' ,reclamation);
    // 👇️ clear all input values in the form
    setEtablissement('');
    setReference('');
    setRegion('');
    setType('');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reclamer
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <div className='cont'>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"23px"}}>Ajouter Les Details De Votre Reclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Reference medicament</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Reference"
                        autoFocus
                        onChange={event => setReference(event.target.value)}
                    />
                </Form.Group>
                <Form.Group onChange={event => setType(event.target.value)}>
                    <Form.Label>Type</Form.Label>
                    <Form.Select >
                        <option style={{color:"white"}} valeur="pharmacien">Pharmacien</option>
                        <option style={{color:"white"}} valeur="grossiste">Grossiste</option>
                        <option style={{color:"white"}} valeur="medecin">Medecin</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group onChange={event => setEtablissement(event.target.value)}>
                <Form.Label>Etablissement</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Etablissement"
                    autoFocus
                />
                </Form.Group>
                <Form.Group onChange={event => setRegion(event.target.value)}>
                <Form.Label>Region</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Region"
                    autoFocus
                />
                </Form.Group>
                <br></br>
                <Button className = 'btn' variant="success" type ="submit" value="Submit" onClick={event => setReclamation({
                    reference : reference,
                    type:type,
                    etablissement:etablissement,
                    region:region
                })} >
                    Save Changes
                </Button>
            </Form>
        </Modal.Body>
        </div>
       
      </Modal>
    </>
  );
}

export default ReclamerProduit;