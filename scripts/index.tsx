'use client';

import Script from 'next/script';
import { Fragment } from 'react';

const Scripts = () => {
  return (
    <Fragment>
      <Script id='analytics'>
        {`!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="bPijYRZNJKrZ1W3DVKkbl057aa1YFVn8";;analytics.SNIPPET_VERSION="4.16.1";
          analytics.load("bPijYRZNJKrZ1W3DVKkbl057aa1YFVn8");
          analytics.page();
          }}();
        `}
      </Script>
      <Script
        type='text/javascript'
        id='hs-script-loader'
        async
        defer
        src='//js.hs-scripts.com/44684093.js'
      />
      <Script id='hsq'>
        {`
          var _hsq = window._hsq = window._hsq || [];
          _hsq.push(["identify",{
              email: getParameterByName("email"),
              sendgrid: "yes"
          }]);
        `}
      </Script>
      <Script id='gtagmanager'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N3FHXVRL');
        `}
      </Script>
      <Script id='hubspot'>
        {`
          function identifyHubspotContactViaVid() {
            fetch("https://web.oliv.ai/auth/identify-hubspot-contact",
                {
                    method: "POST",
                    body: JSON.stringify({
                    "params": {}
                    }),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                })
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                var _hsq = window._hsq = window._hsq || [];
                _hsq.push(["identify", {"email": data["email"],
                                        "user_id": vid,
                                        "vid": vid}]);

                // Push data to hubspot
                // Make sure hubspot tracking code is added to the html
                // ref - https://developers.hubspot.com/docs/api/events/tracking-code
                // code to add - https://app.hubspot.com/settings/44684093/analytics-and-tracking/tracking
                _hsq.push(["trackCustomBehavioralEvent",
                        {"email": data["email"],
                        "vid": vid,
                        "user_id": vid,
                        "name": "identifyHubspotContactViaVid"}]);

                gtag('config', 'G-2Y7743J6Z6', {
                "user_id": vid,
                "email": data["email"],
                "vid": vid
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
          }

          identifyHubspotContactViaVid();
        `}
      </Script>
    </Fragment>
  );
};

export default Scripts;
