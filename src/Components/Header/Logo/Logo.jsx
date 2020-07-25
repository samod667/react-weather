import React from 'react'

import classes from './Logo.module.css'

function Logo() {
    return (
      <div>
        <span className={classes.Logo}>
          <i class="fas fa-5x fa-sun"></i>
        </span>
        <span className={classes.Text}> iWeather</span>
      </div>
    );
}

export default Logo
