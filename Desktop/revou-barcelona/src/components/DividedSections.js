import React, { useState } from 'react';
import CustomDiv from './CustomDiv';

function DividedSections() {
    const [leftBox, setLeftBox] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginLeft: '120px',
        lineHeight: '24px'
    });
    const [rightBox, setRightBox] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginLeft: '0px',
        lineHeight: '24px'
    });

    const [leftBox2, setLeftBox2] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginRight: '0px',
        lineHeight: '24px'
    });
    const [rightBox2, setRightBox2] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginLeft: '0px',
        lineHeight: '24px'
    });

    const [leftBox3, setLeftBox3] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginRight: '0px',
        lineHeight: '24px'
    });
    const [rightBox3, setRightBox3] = useState({
        display: 'block',
        justifyContent: 'flex',
        backgroundColor: '#f4f4f4',
        padding: '64px 64px',
        fontFamily: 'Helvetica',
        marginLeft: '0px',
        lineHeight: '24px'
    });

    return (
        <div>
            <CustomDiv style={leftBox} />
            <article>
                <h1>Left Box</h1>
                <p>Lorem ipsum dol</p>
            </article>
            <CustomDiv style={leftBox} />
        </div>
    );
}

export default DividedSections;
