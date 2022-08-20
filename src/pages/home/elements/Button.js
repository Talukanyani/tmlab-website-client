import React from 'react';
import styles from './button.module.css'

function Button(props) {
    return (
        <button
            className={styles.button}
            onClick={props.onClick}
        >
            <span>{props.text}</span>
        </button>
    );
}

export default Button;