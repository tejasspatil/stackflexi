import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4 dark-text">About Us</h1>
            <p className="lead mb-4">
              Flexi-Shopping is one of the new brands in the prominent Indian
              Apparel, Jewelery and Electronics industry. “By combining the
              strength of timelessness and the enjoyment of of the unexpected,
              Flexi-Shopping has created male & female fashion breakthroguhs
              since 2006. We believe that the classic will always connect with
              the modern”, says designer Leena Devi. With an ambition of
              international distribution through a strong brand, Flexi-Shopping
              needed a visual identity that could express it’s foundation, and
              at the same time be able to adapt to the looks of the changing
              seasons within the fashion & electronics industry. We met these
              demands by creating an identity with one foot in classic
              timelessness and the other in the constantly shifting expressions
              of modern dyas. The identity makes it possible for the brand to
              develop over time and, from season to season, change expressions
              while resting securely on a solid base. The result is a strong
              brand with the ability to communicate its values to clients and
              media. Which have helped to give Flexi-Shopping status and markets
              in India, United Kingdom, North America and South Korea.
            </p>
            <NavLink to="/contact" className="btn btn-dark px-3 w-100 mt-4">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://scontent.cdninstagram.com/v/t51.29350-15/306252297_408421234708217_7331504422957627704_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=DINN1oQNfigAX_6rROR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB9GqdqSbMukelXbjh6LOyISgUJSgya2UCuRRTB77FafQ&oe=636C0BBC"
              alt="About Us"
              height="600px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
