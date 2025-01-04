import React from "react";
import BackgroundImage from "./images/Home.jpg";

const About = () => {
  return (
    <section
      className="about-us"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-container">
        <div className="about-item">
          <div className="about-text">
            <h4>Who We Are</h4>
            <h2>
              Auka & Associates: Trusted Legal Experts in Corporate, Family, and
              Estate Planning Law.
            </h2>
            <p>
              Auka & Associates is a Corporate and Commercial Law Firm based in Kenya. We
              specialise in providing Comprehensive Legal Advice, Public Policy Guidance,
              and Transactional services to a diverse clientele comprising local and
              international clients. Our team consists of highly qualified lawyers with
              extensive experience and expertise in Kenyan transactions and international
              and cross-border advisory mandates.
              <br />
              <br />
              As an innovative and flexible law firm, we prioritize delivering prompt and
              dependable legal advisory and representation services to our clients. In
              addition to our legal services, we offer strategic counsel on government
              relations and stakeholder engagement strategies, assisting our clients in
              navigating the complex national and county regulatory environment.
              <br />
              <br />
              At Auka & Associates, we understand that our clients' success is our
              ultimate goal. Therefore, we strive to support their business endeavors by
              providing proactive and commercially-focused legal solutions. With a deep
              understanding of the dynamic business landscape, we are well-equipped to
              address the legal challenges and opportunities that arise in various
              industries.
            </p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-text">
            <h4>Our Mission</h4>
            <h2>Providing Trusted Legal Solutions for the society.</h2>
            <p>
              At Auka & Associates, our mission is to provide reliable legal services to
              individuals and businesses, ensuring that family matters, corporate needs,
              and estate planning are handled with the utmost care and expertise. We aim
              to offer peace of mind by crafting effective solutions that protect our
              clients' futures.
            </p>
            <h4>Our Vision</h4>
            <h2>Empowering Clients through Legal Excellence.</h2>
            <p>
              Our vision is to be the leading provider of legal services in Kenya, offering
              innovative solutions and trusted guidance to empower our clients in
              achieving their objectives. We strive to be a trusted partner for legal
              services, delivering exceptional results and exceeding our clients'
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
