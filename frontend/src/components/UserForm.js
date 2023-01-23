import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import ListUsers from './ListUsers';
import API from '../api';

export class UserForm extends Component {
  state = {
    step: 0,
    add: true,
    uid: 0,
    fullName: '',
    dob: '2000-05-24',
    sport: [],
    gender: '',
    team: '',
    interests: '',
    location: '',
    description: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    if (this.state.step === 4) {
      this.setState({
        step: 0
      });
    }
    else if (this.state.step === 3) {
      this.state.add ? API.addUser(this.state) : API.editUser(this.state)
      this.setState({
        step: step + 1
      });
    }
    else {
      this.setState({
        step: step + 1
      });
    }
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  setUserId = (uid) => {
    this.setState({
      add: true,
      fullName: '',
      dob: '2000-05-24',
      sport: [],
      gender: '',
      team: '',
      interests: '',
      location: '',
      description: '',
      uid: uid
    });
  };

  setStepToConfirm = (uid) => {
    let user = {};
    API.getUserDetails(uid)
      .then((res) => {
        user = res.data;
        this.setState({
          step: 3,
          add: false,
          uid: uid,
          fullName: user.fullName,
          dob: user.dob,
          sport: user.sport,
          gender: user.gender,
          team: user.team,
          interests: user.interests,
          location: user.location,
          description: user.description
        })
      })
      .catch((e) => {
        console.log(e);
      });
    
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fullName, dob, sport, gender, team, location, interests, description } = this.state;
    const values = { fullName, dob, sport, gender, team, location, interests, description };

    switch (step) {
      case 0:
        return (
          <ListUsers nextStep={this.nextStep} setUserId={this.setUserId} goToConfirm={this.setStepToConfirm}/>
        );
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success nextStep={this.nextStep}/>;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
