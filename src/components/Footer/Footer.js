import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/Akki9519/Portfolio-Akki'
      className='link footer__link'
    >
      <h3 className='t'>Created By : </h3>
      <h3 className='text-white'>Akash kesharwani</h3> 
    </a>
    <h6 className='mt-5 text-white'><CopyrightIcon/>Copyright 2023 Akash Kesharwani. All Rights Reserved.</h6>
    <div className='text-white'><GitHubIcon/><LinkedInIcon/><TwitterIcon/><InstagramIcon/></div>
  </footer>
)

export default Footer
