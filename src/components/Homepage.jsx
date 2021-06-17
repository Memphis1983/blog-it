import React from "react";
import GoogleLogin from "react-google-login";

const Homepage = () => {

  const login = (response) => {
    console.log(response);
  }

  return (
    <div className="home__page">
      <div className="login__message">
        <h2>📗</h2>
        <h1>Welcome to the Bloggers Paradise</h1>
        <p>Bloggers Paradise is the premier source of news, tips, information
        commentary, health and technology and anything in between.
        </p>
        <GoogleLogin
          clientId=""
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login__button"
            >
            Login with Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
         />
      </div>
    </div>
  )
}

export default Homepage;