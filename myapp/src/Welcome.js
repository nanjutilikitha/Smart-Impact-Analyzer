// import React from 'react'
// import './welcome.css'
// function Welcome() {
//   return (
//     <div>
     
//       <h1>this is the react web page </h1>
//       <p>this is the paragraph of react</p>
      
      
//     </div>
//   )
// }

// export default Welcome
import React from 'react'
// import PropTypes from 'prop-types'

const welcome = props => {
  return (
    <div>
     <h6> hi {props.name}, you are enrolled in  {props.course} , and your age is {props.age}</h6>
    <a href={props.website} target="_blank" rel="noopener noreferrer">
      click here
    </a>
    </div>
  )


}

export default welcome
