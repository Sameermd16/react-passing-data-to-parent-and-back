import React from 'react';

function Box(props){

    // const [on, setOn] = React.useState(props.on);


    const styles = {
        backgroundColor: props.on ? "orange" : 'black'
    }
    // function toggle() {
    //     setOn((prevValue) => {
    //         return (!prevValue);
    //     })
    // }
    return (
        <div className='box' style={styles} onClick={()=>props.toggle(props.id)}></div>
    )
}


export default Box;