import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  const [username,setUsername] = useState("")
  const funcc = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user)
    const { attributes } = user;
    const { username } = user;
    setUsername(username)
  }
  funcc()
 
    return (
        <div className="App">
            <header className="App-header">
          <p>
            Hey {username}, welcome to my channel, with auth!
          </p>
          <p>
            Click link to the Wakeup Safe:
          </p>
          <a
            className="App-link"
            href="https://tsui-wakeupsafe.research.chop.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wakeup Safe
          </a>
 
          <p></p>
          <button onClick={AmplifySignOut}>Sign out</button>  
 
                <h2>My App Content</h2>
            </header>
        </div>
    );
}

export default withAuthenticator(App);
