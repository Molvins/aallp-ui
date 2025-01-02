import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const location = useLocation();
  const selectedService = location.state?.service;

  useEffect(() => {
    const fetchServicesData = async () => {
      const response = await fetch('https://aallp-server.onrender.com/services');
      const data = await response.json();
      setServices(data);
    };

    fetchServicesData();
  }, []);

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      {selectedService && <h2>{selectedService}</h2>}
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
