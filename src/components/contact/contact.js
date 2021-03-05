import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <i className="far fa-address-book fa-2x"></i>
        <h2>Contact</h2>
      </div>
      <div className="contact-page-info">
        <p>Lorem ipsum dolor</p>
        <div>
          <span>075257951235</span>
          <span>075257951235</span>
        </div>
        <p>Cluj, Cluj-Napoca</p>
        <span>Romania</span>
      </div>
    </div>
  );
}

export default Contact;