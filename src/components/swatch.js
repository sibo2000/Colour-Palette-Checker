import React from 'react';

function Swatch(props) {
    const swatch = {
        backgroundColor: props.swatch.colour,
        height: '200px',
        flex: '1 0 0px'
    }
    const span = {
        backgroundColor: 'white',
        marginTop: '10px',
        display: 'inline-block'
    }
    return (        
        <div style={swatch}>
            <span style={span}>{props.swatch.name}</span>
            <br/>
            <span style={span}>{props.swatch.colour}</span>
        </div>        
    )
} 

export default Swatch;