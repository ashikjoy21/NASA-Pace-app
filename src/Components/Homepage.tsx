import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <div className="overflow-x-hidden">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eduzone - Learn and Grow</title>
  {/* <link rel="stylesheet" href="styles.css"> */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        :root {\n            --primary-color: #6a1b9a;\n            --secondary-color: #4a148c;\n            --accent-color: #ff6d00;\n            --text-color: #333;\n            --light-bg: #f5f5f5;\n            --white: #ffffff;\n        }\n        \n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        \n        body {\n            font-family: 'Arial', sans-serif;\n            line-height: 1.6;\n            color: var(--text-color);\n        }\n        \n        .container {\n            width: 90%;\n                  margin: 0 auto;\n            padding: 0 20px;\n            flex-direction: row;\n            display: flex;\n            gap: 2vw;\n        }\n        \n        /* Header Styles */\n        header {\n            background-color: var(--primary-color);\n            padding: 1rem 0;\n            position: fixed;\n            width: 100%;\n            z-index: 1000;\n        }\n        \n        nav {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .logo {\n            color: var(--white);\n            font-size: 1.5rem;\n            font-weight: bold;\n            text-decoration: none;\n        }\n        \n        .nav-links {\n            display: flex;\n            list-style: none;\n        }\n        \n        .nav-links li {\n            margin-left: 1.5rem;\n        }\n        \n        .nav-links a {\n            color: var(--white);\n            text-decoration: none;\n            transition: color 0.3s ease;\n        }\n        \n        .nav-links a:hover, .nav-links a.active {\n            color: var(--accent-color);\n        }\n        \n        .btn {\n            padding: 0.5rem 1rem;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        \n        .btn-courses {\n            background-color: var(--accent-color);\n            color: var(--white);\n        }\n        \n        .btn-courses:hover {\n            background-color: #ff8f00;\n        }\n        \n        .mobile-menu-btn {\n            display: none;\n            background: none;\n            border: none;\n            cursor: pointer;\n        }\n        \n        .mobile-menu-btn span {\n            display: block;\n            width: 25px;\n            height: 3px;\n            background-color: var(--white);\n            margin: 5px 0;\n        }\n        \n        /* Hero Section Styles */\n        .hero {\n            background-color: var(--primary-color);\n            color: var(--white);\n            padding: 8rem 0 4rem;\n        }\n        \n        .hero-content {\n            }\n        \n        .hero h1 {\n            font-size: 3rem;\n            margin-bottom: 1rem;\n        }\n        \n        .hero p {\n            font-size: 1.2rem;\n            margin-bottom: 2rem;\n        }\n        \n        .cta-buttons {\n            display: flex;\n            gap: 1rem;\n        }\n        \n        .btn-primary {\n            background-color: var(--accent-color);\n            color: var(--white);\n        }\n        \n        .btn-secondary {\n            background-color: transparent;\n            color: var(--white);\n            border: 2px solid var(--white);\n        }\n        \n        .btn-primary:hover, .btn-secondary:hover {\n            opacity: 0.9;\n        }\n        \n        /* Features Section Styles */\n        .features {\n            background-color: var(--light-bg);\n            padding: 4rem 0;\n        }\n        \n        .feature-card {\n            background-color: var(--white);\n            padding: 2rem;\n            border-radius: 10px;\n            text-align: center;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            transition: transform 0.3s ease;\n        }\n        \n        .feature-card:hover {\n            transform: translateY(-5px);\n        }\n        \n        .feature-card i {\n            font-size: 3rem;\n            color: var(--primary-color);\n            margin-bottom: 1rem;\n        }\n        \n        /* About Section Styles */\n        .about {\n            padding: 4rem 0;\n        }\n        \n        .about-content {\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n        \n        .about-image img {\n                   border-radius: 10px;\n        }\n        \n        .about-text h3 {\n            font-size: 2rem;\n            margin-bottom: 1rem;\n        }\n        \n        .stats {\n            display: flex;\n            justify-content: space-between;\n            margin-top: 2rem;\n        }\n        \n        .stat-item {\n            text-align: center;\n        }\n        \n        .stat-number {\n            font-size: 2rem;\n            font-weight: bold;\n            color: var(--primary-color);\n        }\n        \n        /* Why Choose Us Section Styles */\n        .why-choose-us {\n            background-color: var(--light-bg);\n            padding: 4rem 0;\n        }\n        \n        .choose-us-content {\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n        \n        .choose-us-image {\n                border-radius: 10px;\n        }\n        \n        .choose-us-list {\n            list-style: none;\n            margin-top: 1rem;\n        }\n        \n        .choose-us-list li {\n            margin-bottom: 0.5rem;\n        }\n        \n        .choose-us-list i {\n            color: var(--primary-color);\n            margin-right: 0.5rem;\n        }\n        \n        .program-features {\n            display: flex;\n            justify-content: space-between;\n            margin-top: 3rem;\n        }\n        \n        .program-feature {\n            text-align: center;\n        }\n        \n        .program-feature i {\n            font-size: 2rem;\n            color: var(--primary-color);\n            margin-bottom: 1rem;\n        }\n        \n        /* Programs Section Styles */\n        .programs {\n            padding: 4rem 0;\n        }\n        \n        .program-cards {\n            display: flex;\n            gap: 2rem;\n            margin-bottom: 2rem;\n        }\n        \n        .program-card {\n            background-color: var(--white);\n            border-radius: 10px;\n            overflow: hidden;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n        \n        .program-card img {\n            width: 100%;\n            height: 200px;\n            object-fit: cover;\n        }\n        \n        .program-card-content {\n            padding: 1.5rem;\n        }\n        \n        .program-tag {\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 20px;\n            font-size: 0.8rem;\n            font-weight: bold;\n            margin-bottom: 0.5rem;\n        }\n        \n        .program-tag.english {\n            background-color: #ff6d00;\n            color: var(--white);\n        }\n        \n        .program-tag.drawing {\n            background-color: var(--primary-color);\n            color: var(--white);\n        }\n        \n        .program-tag.science {\n            background-color: #2196f3;\n            color: var(--white);\n        }\n        \n        /* Supporters Section Styles */\n        .supporters {\n            background-color: var(--light-bg);\n            padding: 4rem 0;\n        }\n        \n        .supporter-logos {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 2rem;\n        }\n        \n        .supporter-logos img {\n              filter: grayscale(100%);\n            transition: filter 0.3s ease;\n        }\n        \n        .supporter-logos img:hover {\n            filter: grayscale(0%);\n        }\n        \n        /* Footer Styles */\n        footer {\n            background-color: var(--secondary-color);\n            color: var(--white);\n            padding: 4rem 0 2rem;\n        }\n        \n        .footer-content {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 2rem;\n        }\n        \n        .footer-logo img {\n                   }\n        \n        .footer-info {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n        \n        .footer-info-item {\n            display: flex;\n            align-items: center;\n            gap: 0.5rem;\n        }\n        \n        .footer-links {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 2rem;\n        }\n        \n        .footer-links nav a {\n            color: var(--white);\n            text-decoration: none;\n            margin-right: 1rem;\n        }\n        \n        .social-links a {\n            color: var(--white);\n            font-size: 1.2rem;\n            margin-left: 1rem;\n        }\n        \n        .footer-bottom {\n            text-align: center;\n            padding-top: 2rem;\n            border-top: 1px solid rgba(255, 255, 255, 0.1);\n        }\n        \n        /* Responsive Design */\n        @media (max-width: 768px) {\n            .nav-links {\n                display: none;\n            }\n        \n            .mobile-menu-btn {\n                display: block;\n            }\n        \n            .hero-content, .about-content, .choose-us-content, .program-cards {\n                flex-direction: column;\n            }\n        \n            .about-image, .choose-us-image {\n                margin-bottom: 2rem;\n            }\n        \n            .program-features, .supporter-logos {\n                flex-wrap: wrap;\n                justify-content: center;\n                gap: 2rem;\n            }\n        \n            .footer-content, .footer-links {\n                flex-direction: column;\n                align-items: center;\n                text-align: center;\n            }\n        \n            .footer-info {\n                margin-top: 2rem;\n            }\n        \n            .footer-links nav {\n                margin-bottom: 1rem;\n            }\n        }\n        \n        .hero-image img{\n            width: 40vw;\n            border-radius: 65px;\n        }\n        .container-about{\n            width: 90%;\n                     margin: 0 auto;\n            padding: 0 20px;\n            flex-direction:column;\n            display: flex;\n            gap: 2vw;\n        } \n     "
    }}
  />
  <header>
    <nav className="container">
      <a href="#" className="logo">
        PACEedu
      </a>
      <ul className="nav-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="btn btn-courses">Programs</button>
      <button className="mobile-menu-btn">
        <span />
        <span />
        <span />
      </button>
    </nav>
  </header>
  <main>
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content ">
          <h1>Explore the Universe with <br/>PACE Satellite</h1>
          <p>
          Unleash your curiosity with the PACE Satellite Hub—an interactive,<br/> expert-led platform that makes learning about satellite technology and <br/> space exploration fun and engaging for students!
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            <button className="btn btn-secondary" onClick={() => navigate('/signup')}>Signup</button>
          </div>
        </div>
        <div className="hero-image">
          
          <img
            src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/07/schoolchildren-using-mobile-phone-at-classroom.jpg"
            alt="Happy students"
          />
        </div>
      </div>
    </section>
    <section id="features" className="features">
        <div className='flex flex-row justify-center'>
          <div className="feature-card w-[1000px]">
            <i className="fas fa-book-open" />
            <h3><b>About Us</b></h3>
            <p>An interactive website titled "Explore the Universe with PACE ( Plankton, Aerosol, Cloud, Ocean Ecosystem ): A Classroom Exploration," which features an inbuilt chatbot designed to assist teachers and students about the PACE satellite and its data. The PACE mission, launched by NASA, aims to study the interactions between the ocean, atmosphere, and climate by observing ocean color and atmospheric components like aerosols and clouds.</p>
          </div>
        </div>
        <br/>
        <br/>
      <div className="container">
        <div className="feature-card">
          <i className="fas fa-book-open" />
          <h3><b>Explore from Space!</b></h3>
          <p>Discover how the PACE satellite observes Earth’s oceans and atmosphere from above</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-library" />
          <h3><b>Engaging Learning Tools!</b></h3>
          <p>Access interactive games and tools that make learning about satellite data fun</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chalkboard-teacher" />
          <h3><b>Empower Future Scientists!</b></h3>
          <p>Join citizen science projects and contribute to important environmental research.</p>
        </div>
      </div>
    </section>
    <section id="programs" className="programs">
      <div className="container-about">
      <h2 className='text-white font-bold text-3xl'>Our Programs</h2>
        <h3 className='text-white'> The website is structured into three levels — Beginner, Intermediate, and Advanced ; catering to different age groups and learning stages</h3>
        <div className="program-cards">
          <div className="program-card">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
              alt="English Class"
            />
            <div className="program-card-content">
              <span className="program-tag english">Beginer</span>
              <p>
                Develop strong language skills through our comprehensive English
                program.
              </p>
            </div>
          </div>
          <div className="program-card">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
              alt="Drawing Class"
            />
            <div className="program-card-content">
              <span className="program-tag drawing">Intermediate</span>
              <p>
                Unleash creativity and artistic talent in our engaging drawing
                classes.
              </p>
            </div>
          </div>
          <div className="program-card">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104912-3LEercfBbopy4ZRHaJpRoiOrZvrhax.png"
              alt="Science Class"
            />
            <div className="program-card-content">
              <span className="program-tag science">Advance</span>
              <p>
                Explore the wonders of science through hands-on experiments and
                projects.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    
  </main>
  <footer >
      <div className="footer-bottom">
        <p>©2024, All Rights Reserved | Designed and Developed by Snowden</p>
      </div>
  </footer>
  </div>
</>

  );
};

export default Homepage;