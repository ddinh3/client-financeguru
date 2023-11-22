import React from "react";
import './Button.css';

function Button({name, icon, onClick}) {
    return (
        <Button
         onClick={onClick}>
            {icon}
            {name}
        </Button>
    )
}
export default Button