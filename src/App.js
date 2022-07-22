import logo from './loading.svg';
import React, {useEffect, useState} from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Logger } from 'aws-amplify';

Amplify.configure(awsconfig)
Amplify.Logger.LOG_LEVEL = 'DEBUG';

const logger = new Logger('WUS_log','DEBUG');

function App() {
  const [username,setUsername] = useState("");
  const [userID,setUserID] = useState("");
  //useEffect(() => {
  //  Auth.currentAuthenticatedUser().then((data) => {
  //    setUserID(data.attributes.sub);
  //});});
  const funcc = async () => {
    let user = await Auth.currentAuthenticatedUser();
    logger.info('user name = ', user)
    const { username } = user;
    setUsername(username)
    setUserID(user.attributes.sub)
    if (user){
      logger.info('Redirect to CHOP WUS page');
      window.open = "http://44.206.211.1:3000/?userID="+userID+"&username="+username;
      //window.location = "https://44.206.211.1.nip.io/?userID="+userID+"&username="+username;
    }
  }
  funcc()
  return (
    <div className="App">
      <header className="App-header">
        
      
      </header>
      
    </div>
  );
}

export default withAuthenticator(App);

/*
	<div>
          <h3 id="userName"> Welcome {username} </h3>          
        </div>      
	<p></p> 
        <img src={logo} className="App-logo" alt="logo" />
	
	<a
          className="App-link"
          href="https://tsui-wakeupsafe.research.chop.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wakeup Safe
        </a>
 	<p></p>
        <AmplifySignOut />
*/
