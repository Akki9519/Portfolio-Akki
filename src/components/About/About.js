import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio';
import img from '../../akash_image.jpg';
import './About.css';

const About = () => {
  const { name, description, resume, social } = about

  return (
    
    <div className="about1" id="About">
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      
      <h2 className='about__role'>
      <h2 className="role">Frontend Developer and UI/UX Designer.</h2>
      {/* <div style={{height:"100px"}}><img src={img} alt="ph1" className="image1" style={{height:"40px",width:"40px"}}/></div> */}
      </h2>
      
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      
    </div>
    <div className='about center'>
    <img src={img} alt="ph1" className="image"/>
    </div>
    </div>
    
  )
}

export default About
