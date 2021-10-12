import IconButton from "../icon-button/IconButon"
import { Icon } from "../icon/Icon"
import "./alert.scss";

function Alert(props) {
    const iconClassName = props.iconClass + " icon-sm accent";
    return (
        <dialog className={props.class}>
            <div className="row aic g1">
                <Icon class={iconClassName} />
                <p className="simple-text">{props.content}</p>
            </div>
            <IconButton
                class="bx bx-x-circle tertiary-icon-btn-xs"
                iconClass="icon-xxs"
                onClick={props.deleteAlert}
            />
        </dialog>
    )
}

export default Alert