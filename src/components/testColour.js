import React from 'react';

function TestColour(props) {
    const colour = {
        width: '100%',
        height: '200px',
        backgroundColor: props.colour
    }
    return <div style={colour}></div>
}

export default TestColour;