import { useState } from 'react';
import { App } from '../helpers/types';
import Modal from 'react-modal';
import { fetchAppDetails } from '../helpers/helpers';

const AppDetails: React.FC<App> = ({ company, id, name }) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const afterOpenModal = async () => {
        const response = await fetchAppDetails(id)
        //TODO: wyrenderuj detele, warunke jeżlei brak id jakis loader/fallback
        const details = await response.json()
        console.log("🚀 ~ details", details)
    };
    const refreshInfo = async () => {
        const response = await fetchAppDetails(id)
        // rozwiązanie : użycie propsów jako początkowego stanu i aktulaizacja stanu po zapytaniu do API
    };

    return <>
        <div key={id} style={{display: 'flex', alignSelf: 'center', padding: '5em', border: "1px solid gray" }}>
            <h1>{company}</h1>
            <p>{name}</p>
            <button onClick={openModal}>Open Modal</button>
            <button onClick={refreshInfo}>Refresh app details</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                contentLabel="App details"
            >
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    </>
}

export default AppDetails
