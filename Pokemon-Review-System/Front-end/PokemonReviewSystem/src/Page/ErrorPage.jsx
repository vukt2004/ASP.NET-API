import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./css/ErrorPage.css";

const ErrorPage = () => {
    return (
      <div className="error-page">
        <Result
          status="404"
          title={<span className="error-title">404</span>}
          subTitle={
            <span className="error-subtitle">
              Oops! This page ran away like a mischievous Eevee!
            </span>
          }
          extra={
            <div className="error-content">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                alt="Eevee"
                className="pokemon-image"
              />
              <p className="error-message">
                Eevee is playing hide-and-seek! Let's go back home and try again.
              </p>
              <Link to="/">
                <Button type="primary" shape="round" className="home-button">
                  Return to Home Page
                </Button>
              </Link>
            </div>
          }
        />
      </div>
    );
  };
  
  export default ErrorPage;
  