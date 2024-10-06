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
        eduzone
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
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="btn btn-courses">Courses</button>
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
          <h1>It's Time To Learn More</h1>
          <p>
            Empower your future with quality education. Join Eduzone and unlock
            your potential today!
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
      <div className="container">
        <div className="feature-card">
          <i className="fas fa-book-open" />
          <h3>Popular Courses</h3>
          <p>Explore our wide range of in-demand courses.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-library" />
          <h3>Modern Library</h3>
          <p>Access our extensive digital and physical library.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chalkboard-teacher" />
          <h3>Qualified Teachers</h3>
          <p>Learn from industry experts and experienced educators.</p>
        </div>
      </div>
    </section>
    <section id="about" className="about">
      <div className="container-about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-05%20104901-gOF2nyJnIkqbVUcxp9nFH89Nqjb09s.png"
              alt="Students learning"
            />
          </div>
          <div className="about-text">
            <h3>Learn About Our School - Choose Wisely</h3>
            <p>
              At Eduzone, we believe in nurturing talent and fostering a love
              for learning. Our innovative approach to education ensures that
              every student receives personalized attention and guidance.
            </p>
            <button className="btn btn-primary">Read More</button>
            {/* <div class="stats">
                      <div class="stat-item">
                          <span class="stat-number">574</span>
                          <span class="stat-label">Successful Students</span>
                      </div>
                      <div class="stat-item">
                          <span class="stat-number">1.5k</span>
                          <span class="stat-label">Happy Parents</span>
                      </div>
                      <div class="stat-item">
                          <span class="stat-number">32</span>
                          <span class="stat-label">Awards Won</span>
                      </div>
                  </div> */}
          </div>
        </div>
      </div>
    </section>
    <section id="why-choose-us" className="why-choose-us">
      <div className="container-about">
        <h2>Why Choose Us</h2>
        <h3>A Better Future For Your Kids</h3>
        <p>Let the child be the director, and the actor in their own play</p>
        <div className="choose-us-content">
          
          <div className="choose-us-text">
            <button className="btn btn-primary">Get Started</button>
            <p>
              Our innovative programs are designed to bring out the best in
              every child. We focus on holistic development, combining academic
              excellence with character building.
            </p>
            <ul className="choose-us-list">
              <li>
                <i className="fas fa-user-graduate" /> 6.8k+ active students
                taking gifted courses
              </li>
              <li>
                <i className="fas fa-book" /> 50+ available field programs and
                growing
              </li>
            </ul>
          </div>
        </div>
        <div className="program-features">
          <div className="program-feature">
            <i className="fas fa-brain" />
            <h4>Creative Thinking</h4>
            <a href="#">Learn more</a>
          </div>
          <div className="program-feature">
            <i className="fas fa-route" />
            <h4>Career Planning</h4>
            <a href="#">Learn more</a>
          </div>
          <div className="program-feature">
            <i className="fas fa-microphone-alt" />
            <h4>Public Speaking</h4>
            <a href="#">Learn more</a>
          </div>
          <div className="program-feature">
            <i className="fas fa-running" />
            <h4>Extra Activities</h4>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </section>
    <section id="programs" className="programs">
      <div className="container-about">
        <h2>Our Programs</h2>
        <h3>Our Classes, Events &amp; Programs</h3>
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
        <p>© 2020-21, All Rights Reserved | Designed by Sigma Design</p>
      </div>
  </footer>
  </div>
</>

  );
};

export default Homepage;