import React from 'react';

function MyButton(props) {
    function handleClick(){
        alert('You clicked me!');
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default MyButton;