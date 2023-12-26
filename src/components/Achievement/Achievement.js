import React from 'react'
import { NavLink } from "react-router-dom";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Achievement.css';

function Achieve() {
  return (
    <div>
      <h2 className='section__title font-semibold mt-10 mb-10' id='achieve'>Achievement</h2>
      <ol className="list">
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">541th</span> rank in Codekaze 2022 out of 1 lakh participant.</li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">571th</span> rank in Codekaze 2021 out of 25000 partcipant.</li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">3 star</span> rating in Codechef.<span className="sp1"><a href="https://www.codechef.com/users/atulkesharwani">link</a></span></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/>  I have solved <span className="sp1">900</span> question in leetcode.<a href="https://leetcode.com/atulkesharwani/"><span className="sp1">link</span></a></li>
      <li className="item"><CheckBoxIcon style={{color:"var(--clr-primary)"}}/><span className="sp1 ml-2">5star</span> rating in hackerrank.<a href="https://www.hackerrank.com/kesharwaniatul99"><span className="sp1">link</span></a></li>
      </ol>
    </div>
  )
}

export default Achieve