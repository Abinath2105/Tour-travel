import React from "react";
import'./Footer.css'


function Footer(){
    return(
        <div class="footer">

        <div class="footer-top">
          <div class="container">
    
            <div class="footer-brand">
    
              <a href="#" class="logo">
                <img src="https://cdn4.vectorstock.com/i/1000x1000/41/88/travel-icon-in-colorful-vector-8144188.jpg" alt=""/>
              </a>
    
              <p class="footer-text">
                Travel Together.<br/>Explore Together !
              </p>
    
              <ul class="social-list">
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
            <div class="footer-link-box">
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Services</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Design</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Development</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Marketing</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Content Writing</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Company</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">About</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Terms</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Privacy Policy</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Careers</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Job Info</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Select</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Services</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Payment</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Contact</p>
                </li>
    
                <li class="contact-item">
                  <span>Call : </span>
    
                  <a href="tel:5463876387" class="contact-link">04424 256464</a>
                </li>
    
                <li class="contact-item">
                  <span>Email : </span>
    
                  <a href="mailto:example@gmail.com" class="contact-link">travelindia@gmail.com</a>
                </li>
    
                <li class="contact-item">
                  <span>Address : </span>
    
                  <a href="#" class="contact-link">
                    <address>coimbatore,India</address>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
          </div>
        </div>
    
        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2023 <a href="">edusmart</a>. All right reserved
            </p>
          </div>
        </div>
    
      </div>
    
    );
}

export default Footer;