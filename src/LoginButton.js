import React from 'react';

var LoginButton = React.createClass({

    onSignIn: function(googleUser) {
        console.log("user signed in"); // plus any other logic here
    },

    renderGoogleLoginButton: function() {
        console.log('rendering google signin button');
        gapi.signin2.render('my-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': this.onSignIn
        })
    },

    componentDidMount: function() {
        window.addEventListener('google-loaded',this.renderGoogleLoginButton);
    },

    render: function() {
        let displayText = "Sign in with Google";
        return (
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
        );
    }

});

export default LoginButton;