import '../assets/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className='about-text-container'>
        <h2 className="about-title">Hello, I'm <div className='violet'>Laurent</div></h2>
        <h3 className="about-title2"><div className='violet'>react</div>front-end developper</h3>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent pharetra nibh id lectus venenatis congue. Fusce tristique interdum arcu, <br></br>eget commodo quam dictum eget., consectetur adipiscing elit. Nulla facilisi. Praesent pharetra nibh id lectus venenatis congue. Fusce tristique interdum arcu, eget commodo quam dictum eget, consectetur adipiscing elit. Nulla facilisi. Praesent pharetra nibh id lectus venenatis congue. Fusce tristique interdum arcu, eget commodo quam dictum eget, consectetur adipiscing elit. Nulla facilisi. <br></br>Praesent pharetra nibh id lectus venenatis congue. Fusce tristique interdum arcu, eget commodo quam dictum eget, consectetur adipiscing elit. Nulla facilisi. Praesent pharetra nibh id lectus venenatis congue. Fusce tristique interdum arcu, eget commodo quam dictum eget</p>
           <a href="/mon-cv.pdf" download>
        <button>Curriculum Vitae</button>
        </a>
      </div>
      <img src="/about_photo.png" alt="Photo" className="about-photo" />
       
    </div>
  );
}

export default About;