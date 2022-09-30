import React from "react";
import useModal from "./UseModal";
import Modal from "./Modal";
import {useState} from 'react';

export default function ReclamerProduit() {
  const { isShowing: isFormShowed, toggle: toggleForm } = useModal();
  const initialState = 
  {
    reference:'',
    type:'',
    etablissement:'',
    region:''
  }

  const [reference , setReference] = useState('');
  const [type, setType] = useState('');
  const [etablissement, setEtblissement] = useState('');
  const [region, setRegion] = useState('');
  const [reclamation, setReclamation] = useState(initialState);

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    //event.preventDefault(); // 👈️ prevent page refresh

    console.log('reclamation' ,reclamation);
    // 👇️ clear all input values in the form
    setEtblissement('');
    setReference('');
    setRegion('');
    setType('');
  };

  return (
    <>
      <div className="App">
        <button className="modal-toggle" onClick={toggleForm}>
          Reclamer
        </button>
        <Modal
          isShowing={isFormShowed}
          hide={toggleForm}
          title="Reclamer"
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Etablissement" value = {etablissement} onChange={event => setEtblissement(event.target.value)}/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Region" value = {region} onChange={event => setRegion(event.target.value)}/>
            </div>
            <div className="form-group">
            <select type="select" value = {type} onChange={event => setType(event.target.value)}>
              <option valeur="pharmacien">Pharmacien</option>
              <option valeur="grossiste">Grossiste</option>
              <option valeur="medecin">Medecin</option>
            </select>
            </div>
            <div className="form-group">
              <input 
                type="submit" 
                value="Confirmer" 
                onClick={event => setReclamation({
                  reference : reference,
                  type:type,
                  etablissement:etablissement,
                  region:region
                })} 
              />
            </div>
          </form>
        </Modal>
      </div>

      <style jsx="true">{`
        .App {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
    </>
  );
}
