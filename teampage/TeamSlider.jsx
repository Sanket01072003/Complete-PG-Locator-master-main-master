import React from "react";
import "./CardSlider.css"; // Make sure to import your CSS file

const TeamSlider = () => {
  return (
    <div className="team-slider">
      <div className="team-heading">
        <h1>Our Team</h1>
      </div>
    <div class="container">
      <input type="radio" name="dot" id="one" />
      <input type="radio" name="dot" id="two" />
      <div class="main-card">
        <div class="cards">
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Bhavesh Jaware</div>
                <div class="job">Team Leader</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Atharva Kumare</div>
                <div class="job">Front-end Developer</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Vaishnavi Kharche</div>
                <div class="job">Front-end Developer</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Vaishnavi Kharche </div>
                <div class="job">Front-end Developer</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Amir Saudagar</div>
                <div class="job">Back-end Developer</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="img">
                <img src="images/pro.jpg" alt="" />
              </div>
              <div class="details">
                <div class="name">Sanket Pawar</div>
                <div class="job">Designer</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <label for="one" class="active one"></label>
        <label for="two" class="two"></label>
      </div>
    </div>
    </div>
  );
};

export default TeamSlider;