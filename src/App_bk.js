import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig)

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
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
          <button onClick={signOut}>Sign out</button>  
          


        </div>
      )}
    </Authenticator>
  );
}

export default App;
