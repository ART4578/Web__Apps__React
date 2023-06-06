import { useState } from "react";

function LessText({text, max}) {
    const [showLess, setShowLess] = useState(true);

    const updateText = e => {
        e.preventDefault();
        setShowLess(!showLess);
    }
     
    if (text.length <= max) {
        return <span>{text}</span>
    }

    return <span>{showLess ? `${text.substring(0, max)} ...` : text}
    <button><a href="#" onClick={updateText}>{showLess ? "more" : "less"}</a></button>
    </span>
}

export default LessText;