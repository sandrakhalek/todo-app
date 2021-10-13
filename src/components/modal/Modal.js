import ModalWindow from "./modal-window/ModalWindow";

function Modal({ modal }) {
  return (
    <ModalWindow
      title={modal.name}
      deleteModal={() => this.deleteModal(modal.id)}
    >
      <div className="modal-content">
        <label className="col bottom-space-sm">
          <p className="simple-text bottom-space-xs">Name:</p>
          <Form
            class="form-lg"
            value={modal.name}
            type="text"
            placeholder="Name"
          />
        </label>
        <label className="col">
          <p className="simple-text bottom-space-xs">Description:</p>
          <Textarea
            class="textarea"
            value={modal.description}
            type="text"
            placeholder="Description"
          />
        </label>
      </div>
      <div className="modal-btn-block">
        <button
          className="primary-btn-md"
          onClick={() => this.saveChanges(modal, modal.id)}
        >
          Save
        </button>
      </div>
    </ModalWindow>
  );
}

export default Modal;
