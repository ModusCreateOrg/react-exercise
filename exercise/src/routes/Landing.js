import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div style={{padding: 10}}>
        <h1>First Task</h1>
        <p>
          {'The '}
          <Link to="/home">HOME</Link>
          {' page currently has two components, "TopBar" and "HomeContent."'}
        </p>
        <p>
          {'There is a "Login" button in each.  Your first task is to implement '}
          {'the "Login" buttons so that clicking on either one logs you in.'}
        </p>
        <p>
          {'When '}
          {'logged in, both buttons should change to "Logout" and clicking on '}
          {'either should revert you to logged out state. '}
          {'The TopBar Login button should change to YOUR initials (see example below) and the Signup button should change to Logout'}
        </p>
        <div style={{textAlign: 'center'}}>
          <img alt={'initials'} style={{maxHeight: 44}}src="topbar-example.png"/>
        </div>
        <h1>Second Task</h1>
        <p>
          {'Create a route for a users list; name your component "UserList."'}
        </p>
        <p>
          {'Use https://randomuser.me/ to get the 20 users and display them in a list on the page.'}
          {'The properties to be shown in the list items should be:'}
          <dd>
            {'First Name, Last Name, Email, Phone.'}
          </dd>
        </p>
        <p>
          {'When the user list is displayed, clicking of any user item, the app should navigate to '}
          {'the user detail route (screen); name your component "UserDatail" component. This user details page would be dynamic -  '}
          {'the url should contain the user id while navigating to the user detail page. '}
        </p>
        <p>
          {'There should be a back button on the user detail page so the end-user can go back to the user listing page. '}
          {'The properties to show on the user details are:'}
          <dd>
            {'Picture, First Name, Last Name, Email, Phone'}
          </dd>
        </p>
        <h1>Third Task</h1>
        <p>
          {'Remove the node_modules/ directory from your working exercise and zip up the directory and send it back to us for review.'}
        </p>
        <h1>Notes</h1>
        <ul>
          <li>{'You will be judged on your ability fo follow these instructions, as well as how well you effectively execute these tasks. '}</li>
          <li>{'Take the time to polish your submission.  You want to impress us!'}</li>
        </ul>
      </div>
    );
  }
}
