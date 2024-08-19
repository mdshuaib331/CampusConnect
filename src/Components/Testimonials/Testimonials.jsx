import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "I’ve gained so much more than just a degree at Edusity
                University. The cutting-edge curriculum and real-world learning
                opportunities have made me feel confident and ready to take on
                any challenge in my field. I highly recommend this university to
                anyone serious about their future."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Oliver Thompson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Choosing Edusity University was one of the best decisions I've
                made. The innovative programs, supportive environment, and
                strong industry connections have given me invaluable skills and
                opportunities. It’s a place where you truly feel like you're
                preparing for a successful future."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>George Bennett</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "The diverse and engaging community at Edusity University makes
                learning a truly enriching experience. With a focus on personal
                and professional growth, the university has helped me unlock my
                potential and set me on a path toward success."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Rahul Sharma</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                "Edusity University has exceeded my expectations in every way!
                The flexible learning options allowed me to balance my studies
                with my job, and the support from both faculty and peers has
                been incredible. The hands-on experiences have truly prepared me
                for my career."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
