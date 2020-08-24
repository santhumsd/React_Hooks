import React from 'react';
import './StyleSheet.css'

function CSSStylesheet() {
    return (
        <div>
            <h1 className="Primary">Hi Santhosh</h1>
            <h1 className='error'>App.css in child</h1>
            {/* <h1 className={styles.success}>App.module.css in child it will give error because that module is corresponds to app.js we imported there it wont work untill we import it </h1> */}
        </div>
    )
}

export default CSSStylesheet
