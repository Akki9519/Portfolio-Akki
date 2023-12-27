import React from 'react'
import { NavLink } from "react-router-dom";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Achievement.css';

function Achieve() {
  return (
    <div>
      <h2 className='section__title font-semibold mt-10 mb-10' id='achieve'>Achievement</h2>
      <ol className="list">
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">766th</span> Global rank in TCS CodeVita SEASON 10.<a href="https://drive.google.com/file/d/1sCvZpBvcJn9zmqTGs2gBE5B7QGPOUvi7/view?usp=drive_link"><span className="sp1">link</span></a></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">I have </span> a Certification of Problem settle intern at Imochaworks.<a href='https://drive.google.com/file/d/1I3v-vT8KsgJacfIl4xXRJ6QxT-YsHx7o/view?usp=drive_link'><span className="sp1">link</span></a></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">3 star</span> rating in Codechef.<span className="sp1"><a href="https://www.codechef.com/users/akashkesharwan">link</a></span></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/>  I have solved <span className="sp1">66</span> question & 118 Submission in leetcode.<a href="https://leetcode.com/Akki_12/"><span className="sp1">link</span></a></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">3star</span> rating in hackerrank.<a href="https://www.hackerrank.com/profile/akashkesharwani3"><span className="sp1">link</span></a></li>
      </ol>
    </div>
  )
}

export default Achieve