import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const astyle={
    color:"blue"
  };
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "048dd75e-be04-4485-88b1-0fd5434cb52b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          I’m here to seek opportunities and collaborate! For project inquiries, feedback, or
          just to connect, please email me at my below mentioned email account. You can
          also reach me via LinkedIn at <a href="https://www.linkedin.com/in/md-shuaib-5b9520254/" style={astyle}> www.linkedin.com/in/md-shuaib-5b9520254 </a>. I look
          forward to hearing from you!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> shuaibakhtar331@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91-9560649436
          </li>
          <li>
            <img src={location_icon} alt="" />
            Noida sector-62A, Gautam Buddah Nagar,
            <br /> Uttar Pradesh-201301, INDIA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Number"
            required
          />
          <label>write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
