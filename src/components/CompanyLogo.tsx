import React from 'react';
// @ts-ignore
import logoImg from '../assets/images/regenerated_image_1782499266483.jpg';

interface LogoProps {
  className?: string;
  size?: number;
  color?: string; // color prop kept for API compatibility
}

export default function CompanyLogo({ className = '', size = 44 }: LogoProps) {
  // Use the newly provided high-quality logo image from assets
  // Styled with high-contrast, optimized sharpness to ensure the logo is rendered with pixel perfection
  return (
    <img
      src={logoImg}
      alt="Samal Engineers Logo"
      className={`${className} logo-pristine`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-block',
        verticalAlign: 'middle',
        objectFit: 'contain',
      }}
      referrerPolicy="no-referrer"
    />
  );
}
