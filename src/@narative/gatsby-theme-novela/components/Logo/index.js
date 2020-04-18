import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg width="40" height="35" viewBox="0 0 329 317" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
<g filter="url(#filter0_d)">
<path d="M325 154.5C325 239.828 253.142 309 164.5 309C75.8583 309 4 239.828 4 154.5C4 69.172 75.8583 0 164.5 0C253.142 0 325 69.172 325 154.5Z" fill="#7098B9"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="329" height="317" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
  );
}