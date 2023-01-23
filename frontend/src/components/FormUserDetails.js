import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sports = [
  "Golf",
  "Tennis",
  "Cricket",
  "Basketball",
  "Baseball",
  "American Football",
  "Aquatics",
  "Archery",
  "Automobile Racing",
  "Badminton",
  "Beach Volleyball",
  "Bobsleigh",
  "Body Building",
  "Boxing",
  "Cross Country Running",
  "Cross Country Skiing",
  "Curling",
  "Cycling",
  "Darts",
  "Decathlon",
  "Down Hill Skiing",
  "Equestrianism",
  "eSports",
  "Fencing",
  "Field Hockey",
  "Figure Skating",
  "Gymnastics",
  "Ice Hockey",
  "Martial Arts",
  "Mixed Martial Arts",
  "Modern Pentathlon",
  "Motorcycle Racing",
  "Netball",
  "Polo",
  "Racquetball",
  "Rowing",
  "Rugby",
  "Sailing",
  "Softball",
  "Shooting",
  "Skateboarding",
  "Skeet Shooting",
  "Skeleton",
  "Snow Boarding",
  "Soccer (Football)",
  "Squash",
  "Surfing",
  "Swimming",
  "Track and Field",
];
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your Full Name"
              label="Full Name"
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
              />
            <br />
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              defaultValue={values.dob}
              onChange={handleChange('dob')}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.gender}
                onChange={handleChange('gender')}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Prefer Not To Say"}>Prefer Not To Say</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormControl>
              <InputLabel id="demo-mutiple-checkbox-label">Sport</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={values.sport}
                onChange={handleChange('sport')}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {sports.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={values.sport.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
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

export default FormUserDetails;
