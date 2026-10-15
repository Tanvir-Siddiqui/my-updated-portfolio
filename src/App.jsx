// import React, { useState, useEffect } from 'react';

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollY = window.scrollY;
//       sections.forEach((sec) => {
//         const offset = sec.offsetTop - 150;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute('id');
//         if (scrollY >= offset && scrollY < offset + height) {
//           setActiveNav(id);
//         }
//       });
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div style={inlineStyles.body}>
//       <style>{`
//         * { margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; list-style: none; scroll-behavior: smooth; font-family: 'Poppins', sans-serif; }
//         body { background: #1f242d; color: #fff; }
//         .header { position: fixed; top: 0; left: 0; width: 100%; padding: 20px 9%; background: #1f242d; display: flex; justify-content: space-between; align-items: center; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.5); }
//         .logo { font-size: 25px; color: #fff; font-weight: 600; }
//         .navbar a { font-size: 18px; color: #fff; margin-left: 35px; transition: 0.3s; font-weight: 500; }
//         .navbar a:hover, .navbar a.active { color: #00efff; }
//         section { min-height: 100vh; padding: 120px 9% 80px; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
//         .home { background: #323946; }
//         .home-content h3 { font-size: 32px; font-weight: 700; }
//         .home-content h1 { font-size: 56px; font-weight: 700; line-height: 1.2; margin: 10px 0; }
//         .home-content h3 span { color: #00efff; }
//         .social-media a { display: inline-flex; justify-content: center; align-items: center; width: 42px; height: 42px; background: transparent; border: 2px solid #00efff; border-radius: 50%; font-size: 20px; color: #00efff; margin: 25px 15px 25px 0; transition: 0.3s; }
//         .social-media a:hover { background: #00efff; color: #1f242d; box-shadow: 0 0 10px #00efff; }
//         .btn { display: inline-block; padding: 12px 28px; background: #00efff; border-radius: 40px; box-shadow: 0 0 10px #00efff; font-size: 16px; color: #1f242d; font-weight: 600; cursor: pointer; transition: 0.3s; border: none; }
//         .btn:hover { box-shadow: none; }
//         .home-img img, .about-img img { width: 320px; height: 320px; border-radius: 50%; border: 4px solid #00efff; box-shadow: 0 0 25px #00efff; object-fit: cover; }
//         .about { background: #1f242d; }
//         .about-content h2 { font-size: 45px; margin-bottom: 20px; }
//         .about-content h2 span { color: #00efff; }
//         .about-content h3 { font-size: 26px; margin-bottom: 15px; }
//         .about-content p { font-size: 16px; line-height: 1.6; color: #ddd; margin-bottom: 20px; }
//         .services { background: #323946; flex-direction: column; }
//         .heading { font-size: 45px; text-align: center; margin-bottom: 40px; }
//         .heading span { color: #00efff; }
//         .services-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; width: 100%; max-width: 1100px; }
//         .services-box { background: #1f242d; border: 2px solid #323946; border-radius: 2rem; padding: 30px; text-align: center; box-shadow: 0 0 15px rgba(0,0,0,0.3); transition: 0.3s; }
//         .services-box:hover { border-color: #00efff; transform: scale(1.03); }
//         .services-box h3 { font-size: 22px; color: #fff; }
//         .portfolio { background: #1f242d; flex-direction: column; }
//         .portfolio-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; width: 100%; max-width: 1100px; }
        
//         /* Project Card & White Text Styling */
//         .portfolio-box { position: relative; border-radius: 2rem; overflow: hidden; height: 250px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
//         .portfolio-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
//         .portfolio-box:hover img { transform: scale(1.1); }
//         .portfolio-layer { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: rgba(31, 36, 45, 0.9); display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; padding: 0 25px; transform: translateY(100%); transition: 0.5s ease; }
//         .portfolio-box:hover .portfolio-layer { transform: translateY(0); }
//         .portfolio-layer h4 { font-size: 20px; color: #00efff; font-weight: 700; margin-bottom: 6px; }
//         .portfolio-layer p { font-size: 13px; color: #ffffff; margin-bottom: 12px; line-height: 1.4; font-weight: 400; }
//         .portfolio-layer a { display: inline-flex; justify-content: center; align-items: center; width: 38px; height: 38px; background: #00efff; border-radius: 50%; color: #1f242d; font-size: 18px; box-shadow: 0 0 5px rgba(0,0,0,0.3); }
        
//         .contact { background: #323946; justify-content: center; flex-direction: column; }
//         .contact form { max-width: 700px; width: 100%; text-align: center; }
//         .contact form input, .contact form textarea { width: 100%; padding: 15px; font-size: 16px; color: #fff; background: #1f242d; border-radius: 8px; border: 2px solid #323946; margin: 10px 0; outline: none; }
//       `}</style>

//       {/* Header */}
//       <header className="header">
//         <a href="#home" className="logo">My Portfolio</a>
//         <nav className="navbar">
//           <a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => setActiveNav('home')}>Home</a>
//           <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setActiveNav('about')}>About</a>
//           <a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={() => setActiveNav('services')}>Skills</a>
//           <a href="#portfolio" className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => setActiveNav('portfolio')}>Projects</a>
//           <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setActiveNav('contact')}>Contact</a>
//         </nav>
//       </header>

//       {/* Home Section */}
//       <section className="home" id="home">
//         <div className="home-content">
//           <h3>Hello, It's me</h3>
//           <h1>Tanvir Siddiqui</h1>
//           <h3>And I'm <span>Backend Developer</span></h3>
//           <div className="social-media">
//             <a href="https://www.facebook.com/tanvir.ikbal.37/" target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
//             <a href="https://github.com/Tanvir-Siddiqui" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
//             <a href="https://www.instagram.com/tanvir.ikbal.37/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
//             <a href="https://www.linkedin.com/in/tanvir-siddiqui-83b542203/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
//           </div>
//           <a href="/Tanvir_Siddiqui_Resume.pdf" download="Tanvir_Siddiqui_Resume.pdf" className="btn">Download CV</a>
//         </div>
//         <div className="home-img">
//           <img src="./images/Tanvir-Pic.jpeg" alt="Tanvir Siddiqui" onError={(e)=>{e.target.src='https://via.placeholder.com/300'}} />
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about" id="about">
//         <div className="about-img">
//           <img src="./images/Tanvir-Pic.jpeg" alt="Tanvir Siddiqui" onError={(e)=>{e.target.src='https://via.placeholder.com/300'}} />
//         </div>
//         <div className="about-content">
//           <h2>About <span>Me</span></h2>
//           <h3>Backend Developer at Softvence Agency</h3>
//           <p>
//             I am a Backend Developer with professional experience in building scalable web applications, business workflows, and RESTful APIs using Laravel and MySQL. Skilled in standard Laravel architecture, module design, database optimization, and ERP-style business logic.
//           </p>
//           <button onClick={() => setModalOpen(true)} className="btn">Read More</button>
//         </div>
//       </section>

//       {/* Read More Modal */}
//       {modalOpen && (
//         <div style={inlineStyles.modalOverlay}>
//           <div style={inlineStyles.modalContent}>
//             <h2 style={{ color: '#00efff', marginBottom: '15px' }}>Professional Summary & Experience</h2>
//             <p style={{ lineHeight: '1.6', marginBottom: '10px' }}><strong>Role:</strong> Backend Developer at Softvence Agency (06/2024 – Present)</p>
//             <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>• Developed scalable back-end modules and business workflows using Laravel 11 with clean architecture.</p>
//             <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>• Designed secure REST APIs with JWT authentication, validation, and role-based access control.</p>
//             <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>• Managed complex MySQL relational schemas, query optimization, and migrations.</p>
//             <button onClick={() => setModalOpen(false)} className="btn">Close</button>
//           </div>
//         </div>
//       )}

//       {/* Skills Section */}
//       <section className="services" id="services">
//         <h2 className="heading">My <span>Skills</span></h2>
//         <div className="services-container">
//           {['PHP & Laravel', 'HTML5 / CSS3', 'JavaScript', 'Vue.js', 'MySQL & Database', 'Git & GitHub'].map((skill, index) => (
//             <div className="services-box" key={index}>
//               <h3 style={{ marginTop: '10px' }}>{skill}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="portfolio" id="portfolio">
//         <h2 className="heading">My <span>Projects</span></h2>
//         <div className="portfolio-container">
//           {[
//             { title: 'The Pilot Network', desc: 'Searchable flight schools platform with review system & Admin Dashboard.', link: 'https://pilot-network.com/', img: './images/pilot-network.png' },
//             { title: 'Mentis Learning', desc: 'Interactive GCSE Maths learning platform with quizzes and live bookings.', link: 'https://mentis-learning.com/', img: './images/mentis-1.png' },
//             { title: 'Jobdockets', desc: 'Responsive web app with live currency converter and invoice generator.', link: 'https://jobdockets.com/', img: './images/jobdockets.png' },
//             { title: 'Property Bidding', desc: 'Service marketplace with provider/client roles and real-time chat.', link: 'https://civia.pro/', img: './images/civia.png' },
//             { title: 'Auto Repair Service Platform', desc: 'Car auto repair website to help customers explore services, browse tire options, and book appointments online.', link: 'https://dukeautorepair.com/', img: './images/duke-auto.png' },
//             { title: 'Eligibility Assessment Website', desc: 'A responsive website to help users determine their eligibility for self-employment through a customized questionnaire.', link: 'https://sharpcontrol.nl/', img: './images/sharpcontrol.png' },
//             // { title: 'Notorious Fitness', desc: 'Fitness mobile application with workout routines and video streaming.', link: 'https://notoriousfitness.net/login', img: './images/Noto1.png' },
//           ].map((proj, idx) => (
//             <div className="portfolio-box" key={idx}>
//               <img src={proj.img} alt={proj.title} onError={(e)=>{e.target.src='https://via.placeholder.com/400x300'}} />
//               <div className="portfolio-layer">
//                 <h4>{proj.title}</h4>
//                 <p>{proj.desc}</p>
//                 <a href={proj.link} target="_blank" rel="noreferrer"><i className='bx bx-link-external'></i></a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="contact" id="contact">
//         <h2 className="heading">Contact <span>Me!</span></h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div className="input-box"><input type="text" value="Name : Tanvir Siddiqui" readOnly /></div>
//           <div className="input-box"><input type="text" value="Email : t.ikbal.siddiquee@gmail.com" readOnly /></div>
//           <div className="input-box"><input type="text" value="Mobile: +88-01743673354" readOnly /></div>
//           <textarea rows="3" readOnly style={{ resize: 'none' }}>Address: Dhaka, Bangladesh</textarea>
//         </form>
//       </section>
//     </div>
//   );
// }

// const inlineStyles = {
//   body: { margin: 0, padding: 0 },
//   modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
//   modalContent: { backgroundColor: '#1f242d', color: '#fff', padding: '30px', borderRadius: '10px', maxWidth: '600px', width: '100%', border: '1px solid #00efff', maxHeight: '80vh', overflowY: 'auto' }
// };

// export default App;


import React, { useState, useEffect } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= offset && scrollY < offset + height) {
          setActiveNav(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={inlineStyles.body}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; list-style: none; scroll-behavior: smooth; font-family: 'Poppins', sans-serif; }
        body { background: #1f242d; color: #fff; }
        .header { position: fixed; top: 0; left: 0; width: 100%; padding: 20px 9%; background: #1f242d; display: flex; justify-content: space-between; align-items: center; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        .logo { font-size: 25px; color: #fff; font-weight: 600; }
        .navbar a { font-size: 18px; color: #fff; margin-left: 35px; transition: 0.3s; font-weight: 500; }
        .navbar a:hover, .navbar a.active { color: #00efff; }
        section { min-height: 100vh; padding: 120px 9% 80px; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .home { background: #323946; }
        .home-content h3 { font-size: 32px; font-weight: 700; }
        .home-content h1 { font-size: 56px; font-weight: 700; line-height: 1.2; margin: 10px 0; }
        .home-content h3 span { color: #00efff; }
        .social-media a { display: inline-flex; justify-content: center; align-items: center; width: 42px; height: 42px; background: transparent; border: 2px solid #00efff; border-radius: 50%; font-size: 20px; color: #00efff; margin: 25px 15px 25px 0; transition: 0.3s; }
        .social-media a:hover { background: #00efff; color: #1f242d; box-shadow: 0 0 10px #00efff; }
        .btn { display: inline-block; padding: 12px 28px; background: #00efff; border-radius: 40px; box-shadow: 0 0 10px #00efff; font-size: 16px; color: #1f242d; font-weight: 600; cursor: pointer; transition: 0.3s; border: none; }
        .btn:hover { box-shadow: none; }
        .home-img img, .about-img img { width: 320px; height: 320px; border-radius: 50%; border: 4px solid #00efff; box-shadow: 0 0 25px #00efff; object-fit: cover; }
        .about { background: #1f242d; }
        .about-content h2 { font-size: 45px; margin-bottom: 20px; }
        .about-content h2 span { color: #00efff; }
        .about-content h3 { font-size: 26px; margin-bottom: 15px; }
        .about-content p { font-size: 16px; line-height: 1.6; color: #ddd; margin-bottom: 20px; }
        .services { background: #323946; flex-direction: column; }
        .heading { font-size: 45px; text-align: center; margin-bottom: 40px; }
        .heading span { color: #00efff; }
        .services-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; width: 100%; max-width: 1100px; }
        .services-box { background: #1f242d; border: 2px solid #323946; border-radius: 2rem; padding: 30px; text-align: center; box-shadow: 0 0 15px rgba(0,0,0,0.3); transition: 0.3s; }
        .services-box:hover { border-color: #00efff; transform: scale(1.03); }
        .services-box h3 { font-size: 22px; color: #fff; }
        .portfolio { background: #1f242d; flex-direction: column; }
        .portfolio-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; width: 100%; max-width: 1100px; }
        .portfolio-box { position: relative; border-radius: 2rem; overflow: hidden; height: 250px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
        .portfolio-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
        .portfolio-box:hover img { transform: scale(1.1); }
        .portfolio-layer { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: rgba(31, 36, 45, 0.92); display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; padding: 0 25px; transform: translateY(100%); transition: 0.5s ease; }
        .portfolio-box:hover .portfolio-layer { transform: translateY(0); }
        .portfolio-layer h4 { font-size: 20px; color: #00efff; font-weight: 700; margin-bottom: 6px; }
        .portfolio-layer p { font-size: 13px; color: #ffffff; margin-bottom: 12px; line-height: 1.4; font-weight: 400; }
        .portfolio-layer a { display: inline-flex; justify-content: center; align-items: center; width: 38px; height: 38px; background: #00efff; border-radius: 50%; color: #1f242d; font-size: 18px; box-shadow: 0 0 5px rgba(0,0,0,0.3); }
        .contact { background: #323946; justify-content: center; flex-direction: column; padding-bottom: 40px; }
        .contact form { max-width: 700px; width: 100%; text-align: center; }
        .contact form input, .contact form textarea { width: 100%; padding: 15px; font-size: 16px; color: #fff; background: #1f242d; border-radius: 8px; border: 2px solid #323946; margin: 10px 0; outline: none; }
        .footer { display: flex; justify-content: space-between; align-items: center; padding: 20px 9%; background: #1f242d; }
        .footer-iconTop a { display: inline-flex; justify-content: center; align-items: center; padding: 10px; background: #00efff; borderRadius: 8px; transition: 0.3s; }
        .footer-iconTop a i { font-size: 22px; color: #1f242d; }
      `}</style>

      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">My Portfolio</a>
        <nav className="navbar">
          <a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => setActiveNav('home')}>Home</a>
          <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => setActiveNav('about')}>About</a>
          <a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={() => setActiveNav('services')}>Skills</a>
          <a href="#portfolio" className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => setActiveNav('portfolio')}>Projects</a>
          <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setActiveNav('contact')}>Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>Tanvir Siddiqui</h1>
          <h3>And I'm <span>Backend Developer</span></h3>
          <div className="social-media">
            <a href="https://www.facebook.com/tanvir.ikbal.37/" target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
            <a href="https://github.com/Tanvir-Siddiqui" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
            <a href="https://www.instagram.com/tanvir.ikbal.37/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/tanvir-siddiqui-83b542203/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="/Tanvir_Siddiqui_Resume.pdf" download="Tanvir_Siddiqui_Resume.pdf" className="btn">Download CV</a>
        </div>
        <div className="home-img">
          <img src="./images/Tanvir-Pic.jpeg" alt="Tanvir Siddiqui" onError={(e)=>{e.target.src='https://via.placeholder.com/300'}} />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src="./images/Tanvir-Pic.jpeg" alt="Tanvir Siddiqui" onError={(e)=>{e.target.src='https://via.placeholder.com/300'}} />
        </div>
        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <h3>Backend Developer at Softvence Agency</h3>
          <p>
            I am a Backend Developer with professional experience in building scalable web applications, business workflows, and RESTful APIs using Laravel and MySQL. Skilled in standard Laravel architecture, module design, database optimization, and ERP-style business logic.
          </p>
          <button onClick={() => setModalOpen(true)} className="btn">Read More</button>
        </div>
      </section>

      {/* Read More Modal */}
      {modalOpen && (
        <div style={inlineStyles.modalOverlay}>
          <div style={inlineStyles.modalContent}>
            <h2 style={{ color: '#00efff', marginBottom: '15px' }}>Professional Summary & Experience</h2>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}><strong>Role:</strong> Backend Developer at Softvence Agency (06/2024 – Present)</p>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>• Developed scalable back-end modules and business workflows using Laravel 11 with clean architecture.</p>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>• Designed secure REST APIs with JWT authentication, validation, and role-based access control.</p>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>• Managed complex MySQL relational schemas, query optimization, and migrations.</p>
            <button onClick={() => setModalOpen(false)} className="btn">Close</button>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section className="services" id="services">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
          {['PHP & Laravel', 'HTML5 / CSS3', 'JavaScript', 'Vue.js', 'MySQL & Database', 'Git & GitHub'].map((skill, index) => (
            <div className="services-box" key={index}>
              <h3 style={{ marginTop: '10px' }}>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">My <span>Projects</span></h2>
        <div className="portfolio-container">
          {[
            { title: 'The Pilot Network', desc: 'Searchable flight schools platform with review system & Admin Dashboard.', link: 'https://pilot-network.com/', img: './images/pilot-network.png' },
            { title: 'Mentis Learning', desc: 'Interactive GCSE Maths learning platform with quizzes and live bookings.', link: 'https://mentis-learning.com/', img: './images/mentis-1.png' },
            { title: 'Jobdockets', desc: 'Responsive web app with live currency converter and invoice generator.', link: 'https://jobdockets.com/', img: './images/jobdockets.png' },
            { title: 'Property Bidding', desc: 'Service marketplace with provider/client roles and real-time chat.', link: 'https://civia.pro/', img: './images/civia.png' },
            { title: 'Auto Repair Service Platform', desc: 'Car auto repair website to help customers explore services, browse tire options, and book appointments online.', link: 'https://dukeautorepair.com/', img: './images/duke-auto.png' },
            { title: 'Eligibility Assessment Website', desc: 'A responsive website to help users determine their eligibility for self-employment through a customized questionnaire.', link: 'https://sharpcontrol.nl/', img: './images/sharpcontrol.png' },
            // { title: 'Notorious Fitness', desc: 'Fitness mobile application with workout routines and video streaming.', link: 'https://notoriousfitness.net/login', img: './images/Noto1.png' },
          ].map((proj, idx) => (
            <div className="portfolio-box" key={idx}>
              <img src={proj.img} alt={proj.title} onError={(e)=>{e.target.src='https://via.placeholder.com/400x300'}} />
              <div className="portfolio-layer">
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
                <a href={proj.link} target="_blank" rel="noreferrer"><i className='bx bx-link-external'></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box"><input type="text" value="Name : Tanvir Siddiqui" readOnly /></div>
          <div className="input-box"><input type="text" value="Email : t.ikbal.siddiquee@gmail.com" readOnly /></div>
          <div className="input-box"><input type="text" value="Mobile: +88-01743673354" readOnly /></div>
          <textarea rows="2" readOnly style={{ resize: 'none' }}>House/Holding : 232 ,Village/Road : Firoza House , Bojrapur Post : Cumilla-3500 , Adarsha Sadar</textarea>
        </form>
      </section>

      {/* Footer Design */}
      <footer className="footer">
        <div>
          <p style={{ color: '#aaa', fontSize: '14px' }}>Copyright &copy; 2026 Tanvir Siddiqui. All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </div>
  );
}

const inlineStyles = {
  body: { margin: 0, padding: 0 },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
  modalContent: { backgroundColor: '#1f242d', color: '#fff', padding: '30px', borderRadius: '10px', maxWidth: '600px', width: '100%', border: '1px solid #00efff', maxHeight: '80vh', overflowY: 'auto' }
};

export default App;