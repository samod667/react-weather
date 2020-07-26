import React from 'react'

import classes from './Day.module.css'

function Day({day, uvIndex}) {
    return (
        <div className={classes.Container}>
            <span className={classes.Header}>{day}</span>
            
        </div>
    )
}

export default Day
