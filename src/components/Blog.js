import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  return (
    <div className="app-container">
      <Header />

      <section id="blog" className="blog-container">
        <div className="blog-post">
          <div className="blog-post-image">
            <img
              src="https://i.pinimg.com/736x/c3/a9/5a/c3a95a7142ade7f1b7eb9d925d0503d6.jpg"
              alt="Estate Planning"
              className="responsive-image"
            />
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
            <img
              src="https://i.pinimg.com/736x/97/f7/72/97f772b1a625ce856200a9bba8161185.jpg"
              alt="Corporate Law"
              className="responsive-image"
            />
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

      <Footer />
    </div>
  );
};

export default Blog;
