import React from 'react'

import classes from './Header.module.css'

function Header({location, country}) {
    return (
        <div className={classes.Header}>
            <span>{location}, {country} now</span>
        </div>
    )
}

export default Header
