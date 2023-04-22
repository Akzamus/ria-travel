import React from "react";
import styles from "./Info.module.scss";

function Error({text, errorCode = ''}) {
    const chars = errorCode.toString().split('');
    const codeWithSpans = chars.map((char, index) =>
        index % 2 === 0 ? <span key={index}>{char}</span> : char
    );

    return (
        <div className={styles.container}>
            <h1>{codeWithSpans}</h1>
            <p>{text}</p>
        </div>
    );
}

export default Error;