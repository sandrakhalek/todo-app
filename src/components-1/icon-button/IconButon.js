import { Icon } from "../icon/Icon";
import "./IconButton.scss";

function IconButton(props) {
    return(
        <button 
            className={props.className}
            aria-label={props.ariaLabel}
            onClick={props.click}>
                <Icon class={props.iconClass} />
        </button>
    )
}

export default IconButton;