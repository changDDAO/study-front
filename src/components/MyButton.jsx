import React, {useState} from 'react';

function MyButton({count, onClick}) {

    return (
        <div>
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default MyButton;