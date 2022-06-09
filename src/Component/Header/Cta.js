import React from 'react';
import CV from '../../assests/Ishtiaq Uddin web-developer-resume (2).pdf'
const Cta = () => {
    return (
        <div className="cta mt-2">
         <a href={CV} download className='btn'>Download CV</a>
         
     </div>
    );
};

export default Cta;