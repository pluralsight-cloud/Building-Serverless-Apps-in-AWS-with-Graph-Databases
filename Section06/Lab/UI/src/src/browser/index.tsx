// Load polyfills (once, on the top of our web app)
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./index.css";

/**
 * Frontend code running in browser
 */
import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ConfigContext from "../components/ConfigContext";
import { Config } from "../server/config";
import App from "../App";

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;

const basename = config.app.URL.match(/^(?:https?:\/\/)?[^\/]+(\/?.+)?$/i)?.[1];

/** Components added here will _only_ be loaded in the web browser, never for server-side rendering */
const render = () => {
  hydrate(
    <>
      {/* The configuration is the outmost component. This allows us to read the configuration even in the theme */}
      <ConfigContext.Provider value={config}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </ConfigContext.Provider>
    </>,
    document.getElementById("root"),
  );
};

render();
