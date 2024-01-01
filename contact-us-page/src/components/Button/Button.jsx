import styles from "./Button.module.css";

const Button = (props) => {

    const {isOutline, text, icon, ...rest} = props;

    return (
        <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
    )
}

export default Button