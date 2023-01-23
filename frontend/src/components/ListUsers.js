import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import API from '../api';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';


export class ListUsers extends Component {
	state = {
    userList: [],
  };
	componentDidMount() {
		let users = []
		API.getAllUsers()
			.then((res) => {
				users = res.data;
				this.setState({userList: users})
			})
			.catch((e) => {
				console.log(e);
			});
	}
  render() {
    return (
      <MuiThemeProvider>
        <>
					<AppBar title="All Users" />
					{this.state.userList.length
						? 
						<List component="nav" aria-label="users">
							{this.state.userList.map((user) => (
								<ListItem button key={user.id} onClick={() => this.props.goToConfirm(user.id)}>
									<ListItemIcon>
										<StarIcon />
									</ListItemIcon>
									<ListItemText primary={user.name} />
								</ListItem>
							))}
						</List>
						: null
					}
					 <AddCircleIcon onClick={() => {
							this.props.setUserId(this.state.userList.length+1)
							this.props.nextStep()
						}}
					/>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ListUsers;
