import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="About" />
            <TextField
              placeholder="Enter Your Team"
              label="Team"
              onChange={handleChange('team')}
              defaultValue={values.team}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Location"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Interests"
              label="Interests"
              onChange={handleChange('interests')}
              defaultValue={values.interests}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Description"
              label="Description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
