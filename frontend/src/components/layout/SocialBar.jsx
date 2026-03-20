import React from 'react';
import './styles/SocialBar.css';

import facebookIcon from '../../assets/icons/social/MdiFacebook.svg';
import instagramIcon from '../../assets/icons/social/MdiInstagram.svg';
import youtubeIcon from '../../assets/icons/social/MdiYoutube.svg';
import whatsappIcon from '../../assets/icons/social/MdiWhatsapp.svg';

const SocialBar = () => {
  const icons = [
    { name: "Facebook", src: facebookIcon, id: "facebook", href: "https://www.facebook.com/suntattoosevilla/" },
    { name: "Instagram", src: instagramIcon, id: "instagram", href: "https://www.instagram.com/suntattoosevilla/" },
    { name: "YouTube", src: youtubeIcon, id: "youtube", href: "https://www.youtube.com/suntattoosevilla" },
    { name: "WhatsApp", src: whatsappIcon, id: "whatsapp", href: "https://wa.me/34954577242" }
  ];

  return (
    <ul className="wrapper">
      {icons.map((item, index) => (
        <li key={index} className={`icon ${item.id}`}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'inherit' }}>
            <span className="tooltip">{item.name}</span>
            <img src={item.src} alt={item.name} className="social-svg" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialBar;