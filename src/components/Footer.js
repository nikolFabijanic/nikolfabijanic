import React from 'react'
import GithubIcon from '@mui/icons-material/GitHub';
import LinedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
      <div className='footer'>
        <div className="leftSide">
            <GithubIcon /> <LinedInIcon />
          </div>
          <div className="rightSide">
            <p>Contact</p>
      </div>
      <p className='copy'>&copy; 2025 Nikol Fabijanić</p>
    </div>
  )
}

export default Footer
