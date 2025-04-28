import React from 'react'
import GithubIcon from '@mui/icons-material/GitHub';
import LinedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
      <div className='footer'>
        <div className="leftSide">
          <a href="https://github.com/nikolFabijanic?tab=repositories"> <GithubIcon /> </a>
          <a href="https://www.linkedin.com/in/nikol-fabijani%C4%87-9b9300298/"> <LinedInIcon /> </a>
        </div>
        <div className="rightSide">
          <a href="mailto:nikol.fabijanic@gmail.com">
            <p>Contact</p>
          </a>
        </div>
        <p className='copy'>&copy; 2025 Nikol Fabijanić</p>
    </div>
  )
}

export default Footer
