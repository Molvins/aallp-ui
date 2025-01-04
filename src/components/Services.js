import React from "react";
import CorporateImage from "./images/corporate.jpg";
import FamilyImage from "./images/family.jpg";
import EstatePlanningImage from "./images/estate planning.jpg";

const servicesData = [
  {
    title: "Corporate Law",
    description:
      "Our Corporate Law services help businesses navigate the complexities of the legal landscape. From company formation and compliance to mergers and acquisitions, our experienced attorneys provide strategic guidance to ensure your business thrives.",
    image: CorporateImage,
  },
  {
    title: "Family Law",
    description:
      "We understand that family matters require a compassionate approach. Our Family Law practice specializes in divorce, custody arrangements, spousal support, and more. We are committed to protecting your rights and providing support during challenging times.",
    image: FamilyImage,
  },
  {
    title: "Estate Planning",
    description:
      "Ensure your legacy is preserved with our comprehensive Estate Planning services. From drafting wills and trusts to navigating tax implications, we work closely with you to secure your family's future and provide peace of mind.",
    image: EstatePlanningImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container">
      <h2 className="section-heading">Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
