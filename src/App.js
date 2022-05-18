import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Logger } from 'aws-amplify';

Amplify.configure(awsconfig)
Amplify.Logger.LOG_LEVEL = 'DEBUG';

const logger = new Logger('WUS_log','DEBUG');

function App() {
  const [username,setUsername] = useState("")
  const funcc = async () => {
    let user = await Auth.currentAuthenticatedUser();
    logger.info('user name = ', user)
    const { username } = user;
    setUsername(username)
    if (user){
      logger.info('Redirect to CHOP WUS page');
      window.location = "https://tsui-wakeupsafe.research.chop.edu";
    }
  }
  funcc()
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      
    </div>
  );
}

export default withAuthenticator(App);
