import React, {useState} from 'react';

function MyButton(props) {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default MyButton;