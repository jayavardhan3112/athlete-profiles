import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h2>Updated the user in database</h2>
          <Button color="Primary" variant="contained" onClick={this.props.nextStep}>List all users</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
