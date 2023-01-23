import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
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
    console.log(this.props.values)
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={this.props.values.fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date" secondary={this.props.values.dob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={this.props.values.gender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sport" secondary={this.props.values.sport ? (this.props.values.sport.length > 1 ? this.props.values.sport.join(", ") : this.props.values.sport) : null} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Team" secondary={this.props.values.team} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Interests" secondary={this.props.values.interests} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={this.props.values.location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={this.props.values.description} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >
              Back
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
