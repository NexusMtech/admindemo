import Modal from 'react-bootstrap/Modal'


const ModalComponent = (props) => {
    const { show, title, children, handleClose, handleSubmit} = props;
    return (
        <Modal show={show}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        </Modal>
    )
}

export default ModalComponent;