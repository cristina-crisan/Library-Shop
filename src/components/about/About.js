import Weather from "../weather/weather"
import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <i className="far fa-address-book fa-2x"></i>
        <h2>About</h2>
      </div>
      <div className="about-info">
        <p>Check out the weather at our locations:</p>
        <Weather />
      </div>
    </div>
  );
}

export default About;