import React, { Component } from 'react';

import Logo from './Logo/Logo'
import Form from './Form/Form'

class Header extends Component {

    render(props) {
        return (
          
            <React.Fragment>
              <Logo />
              <Form submit={this.props.submit}/>
            </React.Fragment>
          
        );
    }
}

export default Header;
