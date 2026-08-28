import React, { useState } from "react";

function NameForm() {
    //track input with useState
    const [name, setName] = useState('')
    
    //show alert on button click
    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)}></input>
            <button onClick={() => alert(name)}>
                Show name
            </button>
        </div>
    )
}

export default NameForm;