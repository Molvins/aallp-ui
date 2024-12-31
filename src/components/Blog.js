import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Blog = () => {
  return (
    <section id="blog" className="blog-container">
      {/* <h2 className="section-heading">Our Blog</h2> */}
      <div className="blog-post">
        <div className="blog-post-image">
          {/* <img src={blogImage1} alt="Blog Post" /> */}
        </div>
        <div className="blog-post-content">
          <h3 className="blog-post-title">Understanding the Basics of Estate Planning</h3>
          <p className="blog-post-date">Posted on August 08, 2023</p>
          <p className="blog-post-text">
            Estate planning is more than just writing a will. It's about ensuring your assets are distributed according to your wishes, minimizing tax liabilities, and protecting your loved ones' future. Explore the key elements of a solid estate plan and how Auka & Associates can guide you through the process.
          </p>
          <ScrollLink
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="blog-read-more"
          >
            Read More
          </ScrollLink>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-post-content">
          <h3 className="blog-post-title">Navigating Corporate Law: Tips for Business Owners</h3>
          <p className="blog-post-date">Posted on August 05, 2023</p>
          <p className="blog-post-text">
            Corporate law encompasses a wide range of legal matters that business owners must understand. From forming a company to compliance and contracts, our experts at Auka & Associates offer practical tips and advice to help you navigate these complexities with confidence.
          </p>
          <ScrollLink
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="blog-read-more"
          >
            Read More
          </ScrollLink>
        </div>
        <div className="blog-post-image">
          {/* <img src={blogImage2} alt="Blog Post" /> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
