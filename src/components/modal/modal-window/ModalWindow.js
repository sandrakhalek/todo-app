import React from "react";
import IconButton from "../../icon-button/IconButon";
import "./ModalWindow.scss";

function ModalWindow({ children, ...props }) {
  return (
    <section className="modal">
      <div className="modal-window">
        <div className="modal-nav">
          <div />
          <p className="modal-text">{props.title}</p>
          <IconButton
            class="tertiary-icon-btn-sm"
            iconClass="bx bx-x-circle icon-xs"
            onClick={props.deleteModal}
          />
        </div>
        {children}
      </div>
    </section>
  );
}

export default ModalWindow;
