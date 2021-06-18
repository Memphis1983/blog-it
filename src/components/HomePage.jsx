import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import "../styling/home.css";

const HomePage = () => {

const dispatch = useDispatch()
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true))
    dispatch(setUserData(response.profileObj))
  };

  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="home__page" style={{display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? ( <div className="login__message">
        <h2>📗</h2>
        <h1>Welcome to the Bloggers Paradise!</h1>
        <p>Bloggers Paradise is the premier source of news, tips, information
        commentary, health and technology and anything in between.
        </p>
        <GoogleLogin
          clientId="921001668917-n5qba5v9cbcvj6mshcpf2bn9739qilm5.apps.googleusercontent.com"
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
      </div> ) : ("")}
    </div>
  );
};

export default HomePage;
