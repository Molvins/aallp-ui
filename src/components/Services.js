import React from "react";

const Services = () => {
  return (
    <section id="services" className="services-container">
      <h2 className="section-heading">Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Corporate Law</h3>
          <p>
            Our Corporate Law services help businesses navigate the complexities of the legal landscape. From company formation and compliance to mergers and acquisitions, our experienced attorneys provide strategic guidance to ensure your business thrives.
          </p>
        </div>
        <div className="service-item">
          <h3>Family Law</h3>
          <p>
            We understand that family matters require a compassionate approach. Our Family Law practice specializes in divorce, custody arrangements, spousal support, and more. We are committed to protecting your rights and providing support during challenging times.
          </p>
        </div>
        <div className="service-item">
          <h3>Estate Planning</h3>
          <p>
            Ensure your legacy is preserved with our comprehensive Estate Planning services. From drafting wills and trusts to navigating tax implications, we work closely with you to secure your family's future and provide peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
