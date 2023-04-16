import React from 'react';
import TextMaskInput from 'react-text-mask';
import {CSSTransition} from 'react-transition-group';
import styles from './Input.module.scss';

function Input(
    {
        id,
        label,
        mask,
        value,
        onChange,
        placeholder,
        required,
        errorText,
        isValid,
        animations,
        type = 'text'
    }
) {
    const hasError = !isValid && value.trim() !== "";

    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            {
                mask ? (
                    <TextMaskInput
                        mask={mask}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    />
                )
            }
            <CSSTransition
                in={hasError}
                timeout={300}
                classNames={animations}
                unmountOnExit
            >
                <div className={styles.error}>{errorText}</div>
            </CSSTransition>
        </div>
    );
}

export default Input;