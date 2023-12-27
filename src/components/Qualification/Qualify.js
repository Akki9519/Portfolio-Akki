import React from 'react'
import './Qualify.css';

function Qualify() {
  return (
    <div className="q1">
      <h2 className='section__title font-semibold' id='qualify'>Qualification</h2>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>Graduation</h3>
          <h4>Dr. Ambedkar Institute Of Technology For Handicapped,Kanpur</h4>
          <h5>Bachelor Of Technology</h5>
          <h6>2018-2022</h6>
          <h6>8.16 CGPA</h6>
      </div>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>Intermediate</h3>
          <h4>Vishnu Bhagwan Public School & College,Prayagraj</h4>
          <h5>Physics,Chemistry and Mathematics</h5>
          <h6>2015-2017</h6>
          <h6>69%</h6>
      </div>
      <div className="qualify shadow-lg">
          <h3 className='text-xl font-semibold'>HighSchool</h3>
          <h4>Vishnu Bhagwan Public School & College,Prayagraj</h4>
          <h5>General Subject</h5>
          <h6>2013-2015</h6>
          <h6>9.4 CGPA</h6>
      </div>
    </div>
  )
}

export default Qualify