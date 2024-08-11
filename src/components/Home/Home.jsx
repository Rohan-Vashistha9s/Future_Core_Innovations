import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../media/blog-1.jpg";
import blog2 from "../media/blog-2.jpg";
import blog3 from "../media/blog-3.jpg";
import ser01 from "../media/ser01.png";
import ser02 from "../media/ser02.png";
import ser03 from "../media/ser03.png";
import aboutBgImg from "../media/ab-bg.png";
import featureIcon1 from "../media/features-icon-1.png";
import featureIcon2 from "../media/features-icon-2.png";
import featureIcon3 from "../media/features-icon-3.png";
import faqImg from "../media/faq.png";

const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const reviews = [
        {
          text: `Thanks to Future Core Innovations, our SEO rankings have significantly improved. Their strategies are top-notch, and we’ve seen a substantial increase in web traffic.`,
          name: 'Daniel K.',
          company: 'GreenLeaf Organics',
        },
        {
          text: `Future Core Innovations provided us with a comprehensive IT consulting service that transformed our business processes. Their insights and recommendations were invaluable.`,
          name: 'James B.',
          company: 'UrbanTech Dynamics',
        },
        {
          text: `Our experience with Future Core Innovations has been nothing short of extraordinary. As a growing startup, we needed a partner who could understand our vision and translate it into a functional, user-friendly product. Future Core Innovations did just that. They took the time to understand our requirements in-depth, provided valuable insights, and kept us informed throughout the development process. Their team is highly skilled, responsive, and dedicated. The custom software they developed has significantly improved our operational efficiency and customer satisfaction. We highly recommend their services to any business looking for top-notch IT solutions.`,
          name: 'VedPrakash Mishr.',
          company: 'SmartHomes Tech',
        },
      ];

      const blogPosts = [
        {
          id: 1,
          imgSrc: blog1,
          altText: 'blog-01',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'How is technology working with new things?',
        },
        {
          id: 2,
          imgSrc: blog2,
          altText: 'blog-02',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'Top 10 important tips on IT services & design',
        },
        {
          id: 3,
          imgSrc: blog3,
          altText: 'blog-03',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'How our company works in different ways',
        },
      ];

      const faqData = [
        {
          question: "How can I request a quote for your services?",
          answer: (
            <span>
              You can request a quote by filling out the form on our "Get in Touch" page or by contacting us directly at{' '}
              <a href="mailto:help@futurecoreinnovations.tech">
                help@futurecoreinnovations.tech
              </a>.
            </span>
          ),
        },
        {
          question: "Do you provide maintenance and support for websites and apps?",
          answer: "Yes, we offer ongoing maintenance and support to ensure your website and apps are always up-to-date and functioning smoothly.",
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a variety of industries including healthcare, finance, education, e-commerce, and more.",
        },
        {
          question: "What kind of support do you offer after project completion?",
          answer: "We provide comprehensive post-project support including maintenance, updates, and technical assistance to ensure your systems run smoothly.",
        },
        {
          question: "How do you stay updated with the latest technology trends?",
          answer: "Our team regularly participates in industry conferences, training, and continuous learning programs to stay ahead of the latest technology trends.",
        },
      ];

  return (
    <>
<div id="main" className="bg-center bg-cover bg-gradient-to-b from-[#061443] to-[#171717]/90">
  <div id="hero" className="flex flex-row justify-around items-center h-[840px] mx-auto max-w-[1100px]">
    <div className="content p-5 lg:p-10">
      <h6 className="text-gray-300 mb-1">Future Core Innovations.</h6>
      <h1 className="text-white text-4xl font-bold mb-10">Innovating <br /> Tomorrow, Today</h1>
      <p className="text-gray-300 text-sm font-medium mb-8">
        At Future Core Innovations, we specialize in delivering state-of-the-art web development, app development, and comprehensive IT services. Our expert team is dedicated to transforming your vision into reality.
      </p>
      <div>
        <button className="bg-transparent border-none">
          <Link 
            to="/contact"
            className="bg-white text-black border-2 border-[#eb3b5a] py-4 px-10 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#eb3b5a] hover:text-white"
          >
            Get Started Now
          </Link>
        </button>
      </div>
    </div>
    <div className="box-con flex flex-wrap justify-evenly items-center">
      <div className="box-con-inner bg-white w-[250px] p-5 rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faCircle} className="text-red-500 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-green-400 text-2xl" />
        </div>
        <div>
          <h4 className="text-xl font-bold mt-2 mb-1">Android Apps Development</h4>
          <p className="text-sm">"At first, the purpose of Android was thought of as a mobile OS."</p>
        </div>
      </div>
      <div className="box-con-inner bg-white p-5 w-[250px] rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faCircle} className="text-red-500 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-green-400 text-2xl" />
        </div>
        <div>
          <h4 className="text-xl font-bold mt-2 mb-1">Cyber Security Services</h4>
          <p className="text-sm">"Blocking malware and spam, vulnerability scanning, intrusion detection, firewalls,"</p>
        </div>
      </div>
      <div className="box-con-inner bg-white p-5 w-[250px] rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faCircle} className="text-red-500 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-2xl" />
          <FontAwesomeIcon icon={faCircle} className="text-green-400 text-2xl" />
        </div>
        <div>
          <h4 className="text-xl font-bold mt-2 mb-1">Design & Development</h4>
          <p className="text-sm">"The process of creating software applications and systems by combining design and development activities"</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="text-center my-5 hero-down-btn">
  <h4 className="text-gray-400 text-base">Web Development, Cyber Security, IT Consulting and More.</h4>
  <i className="fa fa-angle-down text-3xl text-gray-400"></i>
</div>

<div id="container" className="max-w-5xl mx-auto my-30">
  <div className="text text-center mb-10">
    <p className="font-semibold">How Can We Help You</p>
    <h1 className="text-center text-4xl font-extrabold text-gray-800 bg-[url('media/bbblurry.svg')] bg-center bg-no-repeat py-4">We’re helping teams do their best work</h1>
  </div>
  <div className="flex flex-wrap justify-between gap-6">
    <div className="quantity q1 bg-[#e9ddff] w-[500px] border-l-4 border-[#e9ddff] p-6 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
      <div className="inner-qn flex items-center justify-between">
        <div>
          <h3 className="text-gray-800 text-xl font-semibold">Zero Configuration</h3>
          <p className="text-gray-800 text-sm mt-5">
            Zero Configuration, Maximum Security - Effortless Integration and Protection for Your Digital Solutions.
          </p>
        </div>
        <div>
          <img src={ser02} alt="Zero Configuration" className="h-36"/>
        </div>
      </div>
    </div>
    <div className="quantity q2 bg-[#ffdadb] w-[500px] border-l-4 border-[#ffdadb] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
      <div className="inner-qn flex items-center justify-between">
        <div>
          <h3 className="text-gray-800 text-xl font-semibold">Code Security</h3>
          <p className="text-gray-800 text-sm mt-5">
            Robust Code Security - Protecting Your Applications from Vulnerabilities with Expert Precision and Care.
          </p>
        </div>
        <div>
          <img src={ser01} alt="Code Security" className="h-36"/>
        </div>
      </div>
    </div>
    <div className="quantity q3 bg-[#d6edff] w-[500px] border-l-4 border-[#d6edff] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
      <div className="inner-qn flex items-center justify-between">
        <div>
          <h3 className="text-gray-800 text-xl font-semibold">Team Management</h3>
          <p className="text-gray-800 text-sm mt-5">
            Effective Team Management - Streamlining Collaboration and Productivity for Optimal Project Success and Growth.
          </p>
        </div>
        <div>
          <img src={ser03} alt="Team Management" className="h-36"/>
        </div>
      </div>
    </div>
    <div className="quantity q4 bg-[#ffede1] w-[500px] border-l-4 border-[#ffede1] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
      <div className="inner-qn flex items-center justify-between">
        <div>
          <h3 className="text-gray-800 text-xl font-semibold">Access Controlled</h3>
          <p className="text-gray-800 text-sm mt-5">
            Access Controlled - Ensuring Secure, Authorized Entry to Your Systems with Robust Protection Measures.
          </p>
        </div>
        <div>
          <img src={ser02} alt="Access Controlled" className="h-36"/>
        </div>
      </div>
    </div>
  </div>
</div>

{/* about section */}

      <div id="about" className="max-w-[1140px] mx-auto my-12 p-5">
  <div className="flex items-center">
    <div className="lg:w-1/2 w-full">
      <div className="p-5 m-2">
        <img
          src={aboutBgImg}
          alt="About Company"
          className="rounded-lg m-2 transition-transform duration-300 transform hover:scale-110"
        />
      </div>
    </div>

    <div className="lg:w-1/2 w-full">
      <div className="p-5 m-2">
        <h4 className="text-base uppercase font-bold my-7">About Company</h4>
        <p className="my-2 text-sm text-[#444444]">
          At Future Core Innovations, our mission is to push the boundaries of what's possible through innovative technology solutions. We are committed to fostering a culture of creativity and excellence, ensuring that we not only meet but exceed our clients' expectations. Our goal is to drive progress and transform industries, creating a better, more connected world for everyone.
        </p>
        <p className="my-2 text-sm text-[#444444]">
          At Future Core Innovations, we take a holistic approach to innovation. We understand that true progress requires more than just cutting-edge technology; it demands a deep understanding of our client's needs and a collaborative spirit.
        </p>
        <h2 className="my-7 font-bold">Let's Start a New Project Together</h2>
        <button className="my-2 bg-transparent border-none">
          <Link
            to="/about"
            className="bg-[#03103D] text-white py-2 px-10 rounded-md border-2 border-[#03103D] text-sm transition-colors duration-200 hover:bg-white hover:text-black"
          >
            About Us
          </Link>
        </button>
      </div>
    </div>
  </div>
</div>

{/* service section */}
<div className="bg-[#e1f3f4] p-[50px_60px] rounded-[20px] max-w-[1140px] mx-auto my-[80px_0_10px_0]">
  <div className="relative">
    <p className="text-[1rem] font-semibold m-0">SERVICES WE PROVIDE</p>
    <h1 className="text-[3.5rem] font-bold bg-[url('media/bbblurry.svg')] bg-start bg-no-repeat text-[#1d3557]">
      Best Quality <br /> Service for your <br /> Company.
    </h1>
    <div className="absolute right-0 top-0 mt-[10px]">
      <i className="fa-solid fa-chevron-left bg-white p-[10px_14px] rounded-[20px] transition-all duration-300 mx-[10px_3px] cursor-pointer hover:bg-[#1d3557] hover:text-white"></i>
      <i className="fa-solid fa-chevron-right bg-white p-[10px_14px] rounded-[20px] transition-all duration-300 mx-[10px_3px] cursor-pointer hover:bg-[#1d3557] hover:text-white"></i>
    </div>
  </div>
  <div className="my-[90px] mx-auto">
    {[
      {
        title: 'Cloud Databases',
        tags: ['SQL', 'API', 'DBaaS'],
        description: 'Cloud databases store and manage data on remote servers accessed over the internet. Cloud databases support real-time data processing and ensure high availability and disaster recovery.',
        imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
      },
      {
        title: 'Website Hosting',
        tags: ['HTTP/HTTPS', 'DNS', 'SSL/TLS'],
        description: 'Website hosting provides the infrastructure and resources needed to make websites accessible online. It ensures fast load times, reliable uptime and allowing businesses to maintain a strong online presence and deliver a seamless user experience.',
        imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
      },
    ].map((service, index) => (
      <div className="bg-white m-[10px] p-[20px] rounded-[10px] shadow-[0_8px_46px_0_rgba(3,15,39,0.04)] transition-all duration-200 hover:translate-y-[10px]" key={index}>
        <h4 className="text-[1.2rem] font-semibold">{service.title}</h4>
        <div className="flex flex-row">
          {service.tags.map((tag, i) => (
            <span className="mr-[20px] text-[12px] font-semibold" key={i}>{tag}</span>
          ))}
        </div>
        <div className="flex flex-row">
          {service.imageSrcs.map((src, i) => (
            <img src={src} alt={`${service.title} icon ${i}`} className="h-[40px] mr-[30px]" key={i} />
          ))}
        </div>
        <p className="text-[#6c6b6b] text-[12px] my-[10px] font-normal">{service.description}</p>
        <button className="bg-[#03103D] border-[#03103D] border-2 rounded-[5px] p-[5px_20px] text-[14px] font-normal text-white cursor-pointer transition-all duration-200">
          <Link to="/service">Read more...</Link>
        </button>
      </div>
    ))}
  </div>
</div>


{/* work  section */}
<div className="max-w-[1140px] mx-auto my-[40px] p-[10px] text-center">
  <h1 className="text-[#1d3557] my-[10px] text-[3.3rem] font-bold bg-[url('media/bbblurry.svg')] bg-center bg-no-repeat bg-contain">
    Our Working <br /> Process
  </h1>

  <div className="flex flex-row items-stretch justify-center mt-[50px]">
    {[
      { step: 'Meet', description: 'With Client' },
      { step: 'Think', description: 'Brainstorming' },
      { step: 'Plan', description: 'Make the Solutions' },
      { step: 'Execute', description: 'Deliver' }
    ].map((item, index) => (
      <div className="p-[20px] flex-[0_0_200px] bg-white m-[10px] rounded-[10px] shadow-[0_8px_46px_0_rgba(3,15,39,0.04)] transition-all duration-300 hover:bg-[#03103D] hover:translate-y-[-10px]" key={index}>
        <h4 className="text-[2rem] font-bold text-[#eb3b5a]">{item.step}</h4>
        <p className="text-[#6c6b6b] font-semibold"> {item.description} </p>
      </div>
    ))}
  </div>
</div>

{/* review section */}
<div className="py-[50px] my-[40px] bg-[linear-gradient(#1F3170,_rgba(31,_31,_31,_0.89))_center,_url('media/review-bg.jpg')_center]">
  <div className="max-w-[1140px] max-h-[400px] h-[400px] mx-auto my-[20px] p-[20px] text-center">
    <h1 className="text-white text-[3rem] my-[10px] font-bold bg-[url('media/bbblurry.svg')] bg-center bg-no-repeat bg-contain">
      What Our Client Says
    </h1>
    <div className="r-slider container">
      {reviews.map((review, index) => (
        <div className="user-rev" key={index}>
          <p className="text-[14px] my-[20px] text-[#b1acac] mx-auto max-w-[500px]">
            {review.text}
          </p>
          <h4 className="text-[1.5rem] font-bold text-white">{review.name}</h4>
          <h5 className="text-[1.2rem] text-[#ccc] my-[10px]">{review.company}</h5>
        </div>
      ))}
    </div>
  </div>
</div>

{/* blog section */}
<div id="blog" className="bg-[#f7f7f7] py-[50px] px-[20px]">
  <div className="max-w-[1140px] mx-auto my-[20px]">
    <div className="text-center mb-[40px]">
      <p className="text-[#585555] font-semibold mb-[5px]">Latest News</p>
      <h1 className="font-bold text-[#585555] mb-[30px] text-[20px] transition-all duration-200">
        Our latest articles & <br /> resources
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
      {blogPosts.map((post) => (
        <Link to="/blog" key={post.id}>
          <div className="bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={post.imgSrc}
              alt={post.altText}
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
            <div className="p-[10px]">
              <div className="flex items-center space-x-2 mb-[10px]">
                <i className="fa-solid fa-tag text-[#ff3d00]"></i>
                <p className="text-[15px] text-[#585555] inline-block">{post.category}</p>
              </div>
              <div className="flex items-center space-x-2 mb-[10px]">
                <i className="fa-regular fa-calendar-days text-[#ff3d00]"></i>
                <p className="text-[15px] text-[#585555] inline-block">{post.date}</p>
              </div>
              <h1 className="text-[#585555] font-bold text-[20px] transition-all duration-200 hover:text-[#ff3d00] cursor-pointer">
                {post.title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

{/* faq section */}
    <div id="faq" className="max-w-[1140px] mx-auto my-[10px] mb-[40px] p-[10px]">
  <h1 className="text-center mt-[60px] text-[3rem] text-[#1d3557] font-bold">
    Frequently Asked Questions
  </h1>

  <div className="my-[30px] flex items-center">
    <div className="md:w-7/12 w-full">
      <div className="p-[20px]">
        <div className="accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="my-[15px] border-none rounded-[10px]">
              <button
                className={`accordion-button rounded-[10px] ${openIndex === index ? 'text-white bg-[#1F3170] shadow-inner' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div className={`accordion-content ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-left">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="md:w-5/12 w-full">
      <div className="p-[20px]">
        <img
          src={faqImg}
          alt="faq img"
          className="w-full h-auto rounded-[50px] transition-transform duration-300 transform hover:scale-110"
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
