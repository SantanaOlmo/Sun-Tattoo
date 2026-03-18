import React from 'react';
import './styles/SocialBar.css';

import facebookIcon from '../../assets/icons/social/MdiFacebook.svg';
import instagramIcon from '../../assets/icons/social/MdiInstagram.svg';
import youtubeIcon from '../../assets/icons/social/MdiYoutube.svg';
import whatsappIcon from '../../assets/icons/social/MdiWhatsapp.svg';

const SocialBar = () => {
  const icons = [
    { name: "Facebook", src: facebookIcon, id: "facebook" },
    { name: "Instagram", src: instagramIcon, id: "instagram" },
    { name: "YouTube", src: youtubeIcon, id: "youtube" },
    { name: "WhatsApp", src: whatsappIcon, id: "whatsapp" }
  ];

  return (
    <ul className="wrapper">
      {icons.map((item, index) => (
        <li key={index} className={`icon ${item.id}`}>
          <span className="tooltip">{item.name}</span>
          <img src={item.src} alt={item.name} className="social-svg" />
        </li>
      ))}
    </ul>
  );
};

export default SocialBar;