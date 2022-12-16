import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "stravel.eu.auth0.com";
const clientId = "crGfbhJvqopSCw212uljkceCHwriXG9G";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
