import React from 'react'
import Moment from 'moment'

import classes from './Header.module.css'

function Header({location, country}) {
    
    return (
      <div className={classes.Header}>
        <span>
          {location}, {country} Now
        </span>
        <span className={classes.Text}>
          {Moment().format("dddd, MMM Do")}
        </span>
      </div>
    );
}

export default Header
