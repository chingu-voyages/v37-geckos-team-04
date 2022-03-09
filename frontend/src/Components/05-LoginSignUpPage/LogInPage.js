import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../reducers/userSlice';

import GoogleButton from '../02-SignUpLogInBtns/GoogleButton';
import { LogInPageCont, LogInFormCont, LogInForm } from './style';

export default function LogInPage() {
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(`Email state: `, loginInfo.email);
  //   console.log(`Password state: `, loginInfo.password);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(isAuthenticated(loginInfo));
  };

  return (
    <LogInPageCont>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        data-name="Layer 1"
        width="1057.21"
        height="835.54"
        viewBox="0 0 1057.21 835.54"
        className="image"
      >
        <defs>
          <linearGradient
            id="4cde2cde-bd85-47c9-bab2-0e38d604e335-198"
            x1="490.54"
            y1="647.1"
            x2="490.54"
            y2="388.67"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="gray" stop-opacity="0.25" />
            <stop offset="0.54" stop-color="gray" stop-opacity="0.12" />
            <stop offset="1" stop-color="gray" stop-opacity="0.1" />
          </linearGradient>
        </defs>
        <title>sleep analysis</title>
        <path
          d="M1055.08,595.45c-41.32,30.7-44.88,91-37.78,142,2.38,17.07,5.37,35.26-1.84,50.91-8.82,19.14-30.7,28.94-51.61,31.61-38.11,4.86-78.19-9.65-104.35-37.79-22.61-24.32-34.61-57.13-57.9-80.8-39-39.61-100.67-45.42-156-40.45-39.15,3.51-82.7,10.08-114.31-13.29-22.24-16.45-33-44.7-35.6-72.24-1.24-13.3-1-27.25-7-39.16-3.59-7.08-9.19-12.94-15.13-18.21-54.24-48.11-137.93-53-189.44-104-34.79-34.45-49.19-85.52-48.4-134.47s15.19-96.6,31-143c11.21-32.94,24.7-67.7,53.14-87.74C349.87,27.63,391.51,28,425.23,42.76s60.54,41.94,82.63,71.38c27.61,36.8,50.85,79.6,90.85,102.33C626,232,657.87,236.21,688.46,243c51.13,11.33,100.2,30.35,148.83,49.8,46.56,18.61,93.31,37.88,134.85,66,29.4,19.87,49.92,47,76.71,69.36,17.46,14.57,38.52,23,54.24,39.78,19.36,20.67,33.91,51.43,20,79C1109.89,573.13,1077,579.15,1055.08,595.45Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
          opacity="0.1"
        />
        <rect
          x="528.94"
          y="175.15"
          width="277.37"
          height="8.95"
          fill="#ebecf0"
        />
        <rect
          x="528.94"
          y="184.1"
          width="277.37"
          height="147.29"
          fill="#f8f9fa"
        />
        <path
          d="M875.84,261.21c-4.28.77-8,2.9-11.8,4.83-5,2.54-8.93,3.18-14.42,1.61-3.42-1-7.28-1.86-10.61-.09-4.2,2.23-4.68,8.19-10.81,6.31-2.12-.65-3,2.67-.91,3.32a9.51,9.51,0,0,0,10.16-2.81c1.86-2.19,2.64-4.33,6-4.41,2.61-.06,5.07,1,7.56,1.64,9.89,2.42,16.58-5.43,25.74-7.08C878.93,264.13,878,260.82,875.84,261.21Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
          opacity="0.5"
        />
        <path
          d="M828,274.19c-9.46-1-19-1.91-28.5-.68-8.6,1.12-16,4.52-23.55,8.67s-14.91,8.29-23.62,7.94-16.61-4-25-5.33c-8.07-1.24-14.42.56-21,5.26-3.87,2.76-7.63,4.76-12.46,5.16-4.26.35-8.54-.14-12.81-.19a32.29,32.29,0,0,0-20.14,6.27c-5.55,4-10.34,9-16.19,12.55-7.49,4.55-14.58,3.67-21.87-.8-6.59-4-12.64-9.23-20.72-9.58-2.21-.1-2.21,3.35,0,3.44,7.64.33,13.51,5.89,19.78,9.6,5.57,3.29,11.76,5.11,18.15,3.23,12.89-3.8,20.08-17.82,33.38-20.7,8.7-1.88,17.82,1.29,26.43-1.48,3.78-1.21,6.78-3.63,10-5.84a20.62,20.62,0,0,1,11.86-4c8.5,0,16.55,3.67,24.83,5.13a36.52,36.52,0,0,0,22.34-3.1c8.81-4.05,16.67-9.85,26.28-12,10.77-2.44,22-1.24,32.87-.12C830.23,277.86,830.21,274.42,828,274.19Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <circle cx="756.76" cy="241.91" r="6.88" fill="#eca72c" />
        <circle cx="534.83" cy="179.28" r="2.06" fill="#f8f9fa" />
        <circle cx="540.33" cy="179.28" r="2.06" fill="#f8f9fa" />
        <circle cx="545.84" cy="179.28" r="2.06" fill="#f8f9fa" />
        <path
          d="M78.51,596.91s-49.57,77.44,112.93,78.77c0,0,2.39-67.38-50.73-95.14a47.66,47.66,0,0,0-61.44,15.22Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M78.88,595.61s83.23,16.4,112.56,80.07"
          transform="translate(-71.39 -32.23)"
          fill="none"
          stroke="#535461"
          stroke-miterlimit="10"
        />
        <path
          d="M198.7,665.26s-53.44-69.06-48.56-137.14c2-28.57-4.71-57.11-20.21-81.21a222.5,222.5,0,0,0-25.11-32"
          transform="translate(-71.39 -32.23)"
          fill="none"
          stroke="#535461"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M107.62,372c3.73,9.56-2.76,44.05-2.76,44.05S76.73,395.06,73,385.5A18.59,18.59,0,1,1,107.62,372Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M156.92,413.78c-2.06,10.06-26.26,35.48-26.26,35.48s-12.22-32.9-10.16-43a18.59,18.59,0,1,1,36.41,7.47Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M191,504.78c-6.86,7.64-40.57,17.37-40.57,17.37s6.06-34.57,12.91-42.21A18.59,18.59,0,0,1,191,504.78Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M201.28,579.45c-5.47,8.69-37.06,24-37.06,24s.13-35.09,5.6-43.78a18.59,18.59,0,1,1,31.46,19.8Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M95,465.3c9.46,4,44.11-1.58,44.11-1.58S118.93,435,109.47,431A18.59,18.59,0,1,0,95,465.3Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M108.16,552.47c10.22,1,41.61-14.71,41.61-14.71s-27.87-21.32-38.09-22.3a18.59,18.59,0,1,0-3.52,37Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M132.55,635.43c9.91,2.69,43.5-7.47,43.5-7.47s-23.87-25.73-33.78-28.41a18.59,18.59,0,1,0-9.72,35.88Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M107.62,372c3.73,9.56-2.76,44.05-2.76,44.05S76.73,395.06,73,385.5A18.59,18.59,0,1,1,107.62,372Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M156.92,413.78c-2.06,10.06-26.26,35.48-26.26,35.48s-12.22-32.9-10.16-43a18.59,18.59,0,1,1,36.41,7.47Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M191,504.78c-6.86,7.64-40.57,17.37-40.57,17.37s6.06-34.57,12.91-42.21A18.59,18.59,0,0,1,191,504.78Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M201.28,579.45c-5.47,8.69-37.06,24-37.06,24s.13-35.09,5.6-43.78a18.59,18.59,0,1,1,31.46,19.8Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M95,465.3c9.46,4,44.11-1.58,44.11-1.58S118.93,435,109.47,431A18.59,18.59,0,1,0,95,465.3Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M108.16,552.47c10.22,1,41.61-14.71,41.61-14.71s-27.87-21.32-38.09-22.3a18.59,18.59,0,1,0-3.52,37Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M132.55,635.43c9.91,2.69,43.5-7.47,43.5-7.47s-23.87-25.73-33.78-28.41a18.59,18.59,0,1,0-9.72,35.88Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.25"
        />
        <path
          d="M534.89,532.67c-19-.42-39.41.53-54.51,8-28,13.82-24.23,41.85-42.49,61.3-15.42,16.42-44.89,24.95-73.47,30.39-46.56,8.87-95.39,12.19-141.63,21.72-27.26,5.62-54.32,13.79-73,27.77s-27.06,34.83-14.43,51.37c11.68,15.29,37.41,23.47,60.84,31.39s48.25,18.31,54.77,34.82c3.63,9.19.93,19.1,5.17,28.17,8.36,17.9,39.67,26.35,67.8,30.92,22.47,3.65,45.31,6.34,68.33,8,18.39,1.35,37.2,2.06,55.25-.57,15.63-2.28,30.1-7,45.09-10.63,95.24-23.19,204.78-3.13,301.92-22.77C812.21,829,829.6,824,843,815.82c10-6.08,17.4-13.68,23.63-21.56,15.86-20,24.55-42.43,25.22-64.92.4-13.48-2-27.1,1.69-40.38,3.87-13.82,14.2-26.53,19.7-40.12,10-24.7,3-52-18.77-73.37a70,70,0,0,0-27.8-17.28c-8.8-2.82-18.64-3.9-28.33-5-27-2.93-54.35-5.87-81.59-4.22-19.38,1.18-38.35,4.67-57.79,5.3-27.28.89-48.65-5.4-73.38-11.31C597.13,536.22,565.12,533.33,534.89,532.67Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
          opacity="0.1"
        />
        <polygon
          points="120.14 296.01 120.14 563.48 476.02 494.35 469.22 289.21 120.14 296.01"
          fill="#dbaca2"
        />
        <polygon
          points="789.11 611.37 789.11 699.77 412.83 809.71 408.99 807.72 111.36 653.3 111.36 287.79 479.7 275.89 481.97 478.76 467.23 483.3 461.56 293.55 137.42 304.79 135.16 579.63 417.36 703.17 417.58 703.12 789.11 611.37"
          fill="#e8c2b8"
        />
        <polygon
          points="789.11 611.37 789.11 699.77 412.83 809.71 408.99 807.72 417.58 703.12 789.11 611.37"
          opacity="0.1"
        />
        <path
          d="M406.87,515.24S224.69,533.42,207,559.75s-.15,58.63-.15,58.63l281.64,122.4,381.94-98.6s-10.2-69.14-41.93-77.07S544,502.78,544,502.78,442,496.54,406.87,515.24Z"
          transform="translate(-71.39 -32.23)"
          fill="#ebecf0"
        />
        <path
          d="M206.83,560l287.31,99.17S800.59,566.25,844,575c0,0-214.37-76.73-300-73.39-68.24,2.66-139.69,13.86-139.69,13.86S214.77,534.51,206.83,560Z"
          transform="translate(-71.39 -32.23)"
          fill="#f8f9fa"
        />
        <path
          d="M648.88,623.8l0,0,.07-.1,0-.06.05-.1,0-.07,0-.1,0-.07,0-.11,0-.07,0-.13v-.06q0-.09,0-.18v0c0-.07,0-.14,0-.21s0,0,0-.07,0-.1,0-.15v-.09l0-.15,0-.1,0-.15,0-.1,0-.16,0-.1,0-.17,0-.09-.08-.25v0l-.1-.28,0-.09-.08-.2,0-.11-.08-.19-.05-.12-.08-.19-.06-.13-.09-.19-.06-.12-.11-.21-.06-.11-.15-.29,0,0-.18-.34-.06-.11-.13-.24-.07-.13-.13-.22-.08-.14-.13-.22L647,617l-.14-.22-.09-.14-.15-.24-.08-.13-.2-.32,0-.06-.25-.38-.08-.11-.18-.27-.1-.14-.17-.24-.1-.15-.17-.24-.11-.16L645,614l-.11-.15-.19-.26-.1-.13-.25-.34,0-.05-.29-.4-.1-.14-.19-.26-.13-.17-.18-.24-.13-.17-.18-.24-.13-.16-.19-.25-.13-.16-.2-.26-.12-.15-.24-.3-.08-.1h0c-.9-1.14-1.83-2.28-2.76-3.38a31,31,0,0,0-21.08-10.93c-.83-.07-1.7-.16-2.58-.27l-.37,0-.65-.09-.31,0-1-.14h0l-.95-.15-.33-.06-.67-.12-.4-.08-.61-.12-.43-.09-.58-.13-.44-.1-.58-.14-.45-.11-.57-.15-.45-.12-.57-.16h0c-3-4.46-7.56-8.43-12-9.2a9,9,0,0,0-3.67.19l-.21-.23-.3-.34-.4-.51-.26-.34-.42-.59-.21-.29q-.31-.45-.59-.92a8.94,8.94,0,0,0-1.84-.59,165.3,165.3,0,0,0,26.09-6.15,5.56,5.56,0,0,0,1.17-.61l.18-.06c7.41-2.7,16.51-29,10.11-32.68s-16.17-34-21.9-49.53-22.24-17.18-22.24-17.18-23.92-18.53-34.7-16.51-12.47-14.15-13.48-14.82a1.22,1.22,0,0,1-.29-.35c-2.6-4.07-23.27-9.5-34.42-12.18C486,422.94,473,416.81,462.49,414.28a23.56,23.56,0,0,0-20.56,4.1c-22.08,1.12-25.6,17.8-25.6,17.8a16.55,16.55,0,0,0,1.16,6.66,26.81,26.81,0,0,1-3.57-.19c2.56-4.23,2.64-9.67,4.55-14.32,3.77-9.2,14.17-13.95,24-15.19,5.73-.72,12-.72,16.52-4.31a12.53,12.53,0,0,0,4.48-7.41,2.66,2.66,0,0,0-.16-1.9,2.71,2.71,0,0,0-1.09-.88c-5.92-3.16-13.05-2.34-19.77-2.49-10.92-.24-21.56-3.23-32.12-6-4.47-1.17-9.3-2.3-13.62-.64-4.08,1.56-6.86,5.28-10.13,8.17-13.4,11.82-35.65,10.11-47.57,23.43-2.76,3.09-4.83,7.28-3.82,11.3.41,1.64,1.32,3.15,1.61,4.82.58,3.3-1.3,6.46-2.89,9.41s-3,6.53-1.5,9.53c2.27,4.58,9.2,4.24,12.8,7.87,1.67,1.69,2.48,4.11,4.22,5.72,2.79,2.57,7.08,2.37,10.86,2,1.49-.14,3.72-.55,4.54-1.86a25.93,25.93,0,0,0,40.81-7,36.6,36.6,0,0,1,23,6.22,16.34,16.34,0,0,0,5.38,7.6c2.36,1.85,5.17,4.12,8,6.55-7.17,1.89-13.54,3.1-13.54,3.1s-28.3,9.1-28.3,15.16a7.49,7.49,0,0,0,1,3.11,12.39,12.39,0,0,0-1.19,4.81c-7.81-1.32-14.06-3.31-17.29-6.24,0,0-.92-.25-2.34-.53-1.9-2.43-7.48-9.18-10.8-8.91-2.21.18-3,5.32-3.28,9.92a4.29,4.29,0,0,0-.76.86c-3.37,5.05,2.7,15.16,6.74,16.85s26.28,1,41.44,12.13c6.72,4.93,18.27,5.88,29,5.42-10.79,7.62-25.9,19.33-28,26.59-1.13,3.85-2.46,8.63-2.38,13.54-6.6,8.73-16.59,27.16,8.11,36,20.36,7.27,75.56,6.34,114.89,4.56,18.3,3.23,33.41,6.48,39.75,9.59,0,0,15.16,2,21.23,5.73s17.18,2.7,17.18,2.7,21.56,3.71,26.28,8.42,12.8-8.09,2.7-14.15c-3.94-2.36-9.81-6.25-15.5-10.51,7.31.86,13.76,1.8,17.86,2.76l.41.09.13,0,.26,0,.15,0,.22,0,.14,0,.21,0h1l.26,0h.08l.16,0,.09,0,.13,0,.08,0,.12,0,.08,0,.11-.05.07,0,.1-.07.05,0,.13-.11h0Zm-93.07-32.3s-2.84-.65-7.08-1.65l-8.42-3.4s14.37-4.52,27.68-10.27c3.81,1.67,7.16,3,8,4.21a2.27,2.27,0,0,0,1.39.73c-5,1.24-11.42,4.43-18.95,11.79A16.78,16.78,0,0,1,555.81,591.5ZM454.07,510.3l8.31-3.86c1.81,1.54,3.75,3,5.65,4.42-4.56.27-10.69.57-17.62.76C452.53,510.91,454.07,510.3,454.07,510.3Z"
          transform="translate(-71.39 -32.23)"
          fill="url(#4cde2cde-bd85-47c9-bab2-0e38d604e335-198)"
        />
        <path
          d="M383.26,503.86S376,494,372.05,494.3s-3.3,16.82-3.3,16.82Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M476.6,510.46s-77.18,6.27-91.69-6.93c0,0-13.52-3.63-16.82,1.32s2.64,14.84,6.6,16.49,25.73,1,40.57,11.87,53.76,2,53.76,2l16.16-6.27Z"
          transform="translate(-71.39 -32.23)"
          fill="#ff7c5e"
        />
        <path
          d="M476.6,510.46s-77.18,6.27-91.69-6.93c0,0-13.52-3.63-16.82,1.32s2.64,14.84,6.6,16.49,25.73,1,40.57,11.87,53.76,2,53.76,2l16.16-6.27Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M587.09,547.4s-16.49-11.87-50.46,3-118.73,22.76-118.73,22.76-28.36,28.36,4,39.91,154.35,2,154.35,2,49.8,3.3,65.3,6.93c9.38,2.2,2-8.42-5.35-17.14a30.29,30.29,0,0,0-20.64-10.7c-9.74-.83-23.25-3.89-29.43-14.05,0,0-11.87-5.94-29.68,11.87L539.27,585s47.16-14.84,48.81-24.74S587.09,547.4,587.09,547.4Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M587.09,547.4s-16.49-11.87-50.46,3-118.73,22.76-118.73,22.76-28.36,28.36,4,39.91,154.35,2,154.35,2,49.8,3.3,65.3,6.93c8.22,1.92,3.55-6-2.64-13.82a37.88,37.88,0,0,0-25.4-14.22c-9.5-1.08-21.62-4.39-27.37-13.85,0,0-11.87-5.94-29.68,11.87L539.27,585s47.16-14.84,48.81-24.74S587.09,547.4,587.09,547.4Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M587.42,500.57s-20.78-33-69.92-4.29l-63,35s-35,22.1-38.26,33.31-8.25,30.34,26.06,37.6,114.12,16.49,130.94,24.74c0,0,14.84,2,20.78,5.61s16.82,2.64,16.82,2.64,21.11,3.63,25.73,8.25,12.53-7.92,2.64-13.85-32.32-21.77-32-28S599.62,584.34,592,583s-17.48,9.89-17.48,9.89-12.53,2-20.12-3c0,0-38.92-8.91-42.88-11.54s-31-12.86-31-12.86,64-.66,82.78-17.81c0,0,7.26-5.28,13.19-3.63C576.54,544.1,605.89,532.89,587.42,500.57Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M400.41,438.56s18.8,13.19,33.31,0S440,479.13,440,479.13s-20.12-26.72-50.13-9.23Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M400.41,438.56s18.8,13.19,33.31,0S440,479.13,440,479.13s-20.12-26.72-50.13-9.23Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M319.94,551.69s19.79-16.82,31-17.15c3.34-.1,7.2-3.5,11-8.22a42.22,42.22,0,0,1,40.79-15c6.38,1.18,14.23,1.15,23.76-1.21,34.63-8.58,17.48-30,17.48-30l-10.88-9.23s-14.84-10.22-20.45-9.56-20.12,15.5-21.77,13.85-21.77-16.49-25.07-20.45S336.1,437.9,342.7,434.27,382.6,417.12,376,414.48s-42.22-6.6-56.07,9.89S313,542.12,319.94,551.69Z"
          transform="translate(-71.39 -32.23)"
          fill="#f8f9fa"
        />
        <path
          d="M319.94,551.69s19.79-16.82,31-17.15c3.34-.1,7.2-3.5,11-8.22a42.22,42.22,0,0,1,40.79-15c6.38,1.18,14.23,1.15,23.76-1.21,34.63-8.58,17.48-30,17.48-30l-10.88-9.23s-14.84-10.22-20.45-9.56-20.12,15.5-21.77,13.85-21.77-16.49-25.07-20.45S336.1,437.9,342.7,434.27,382.6,417.12,376,414.48s-42.22-6.6-56.07,9.89S313,542.12,319.94,551.69Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M321.26,549.38s19.79-16.82,31-17.15c3.34-.1,7.2-3.5,11-8.22A42.22,42.22,0,0,1,404,509c6.38,1.18,14.23,1.15,23.76-1.21,34.63-8.58,17.48-30,17.48-30l-10.88-9.23s-14.84-10.22-20.45-9.56-20.12,15.5-21.77,13.85-21.77-16.49-25.07-20.45S337.42,435.59,344,432s39.91-17.15,33.31-19.79-42.22-6.6-56.07,9.89S314.33,539.81,321.26,549.38Z"
          transform="translate(-71.39 -32.23)"
          fill="#f8f9fa"
        />
        <path
          d="M417.89,437.9s5.28-25.07,43.87-15.17,57.72,31.33,57.72,31.33l-35,16.16-42.88-14.51S417.57,456,417.89,437.9Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M488.48,431.63s37.11,8,40.61,13.51a1.19,1.19,0,0,0,.29.34c1,.66,2.64,16.49,13.19,14.51s34,16.16,34,16.16,16.16,1.65,21.77,16.82,15.17,44.86,21.44,48.48-2.64,29.35-9.89,32-33.31,8.91-35.62,5.61-22.43-6.93-21.11-17.48,9.23-20.45,3-26.72-10.22-22.76-19.46-26.06-25.73-4.29-35.62,2.31S479.24,518,479.24,518s-20.45-11.87-23.75-20.12c-2.22-5.56-13.28-14.86-20.26-20.33a16,16,0,0,1-6.11-12c-.29-8.14-.55-20.14.31-22.08,1.32-3,19.46-20.78,19.46-20.78Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M489.8,431s37.11,8,40.61,13.51a1.19,1.19,0,0,0,.29.34c1,.66,2.64,16.49,13.19,14.51s34,16.16,34,16.16,16.16,1.65,21.77,16.82,15.17,44.86,21.44,48.48-2.64,29.35-9.89,32-33.31,8.91-35.62,5.61-22.43-6.93-21.11-17.48,9.23-20.45,3-26.72-10.22-22.76-19.46-26.06-25.73-4.29-35.62,2.31-22.92,7.75-22.92,7.75-19.29-12.7-22.59-20.94c-2.22-5.56-13.28-14.86-20.26-20.33a16,16,0,0,1-6.11-12c-.29-8.14-.55-20.14.31-22.08,1.32-3,19.46-20.78,19.46-20.78Z"
          transform="translate(-71.39 -32.23)"
          fill="#ff7c5e"
        />
        <path
          d="M404.37,502.54c-.33.33-5.94,8.58.66,13.19A14.77,14.77,0,0,0,417.89,518Z"
          transform="translate(-71.39 -32.23)"
          fill="#ffd5d8"
        />
        <path
          d="M436,430.64s8.91-17.81,28-13.19,46.83,21.44,53.43,38.26S492.43,493,492.43,493l-37.6,17.48s-11.54,4.62-14.84,3S420.86,526,420.86,526s-17.81-17.15-17.81-23.09S430.76,488,430.76,488s33-6.27,32.65-12.53c0,0,5.61-6.6,2.64-8.58s-34.8-11.38-34.8-11.38S430.1,434.6,436,430.64Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.1"
        />
        <path
          d="M435,429.65s8.91-17.81,28-13.19,46.83,21.44,53.43,38.26S491.44,492,491.44,492l-37.6,17.48s-11.54,4.62-14.84,3S419.87,525,419.87,525s-17.81-17.15-17.81-23.09S429.77,487,429.77,487s33-6.27,32.65-12.53c0,0,5.61-6.6,2.64-8.58s-34.8-11.38-34.8-11.38S429.11,433.61,435,429.65Z"
          transform="translate(-71.39 -32.23)"
          fill="#ff7c5e"
        />
        <path
          d="M392.83,466.59a41.14,41.14,0,0,1,17.61-5.83c1.81-3.49-2.94-7.29-2.94-11.49,0-3.52-1.34-4.86-2.64-7.92-4.72-1.71-1.48-6.1-1.48-6.1Z"
          transform="translate(-71.39 -32.23)"
          opacity="0.1"
        />
        <circle cx="313.52" cy="420.18" r="25.4" fill="#ffd5d8" />
        <path
          d="M365.87,462.83c5.67-4.38,13.05-5.85,20.19-6.49,4.46-.4,9-.54,13.28-1.9a48.2,48.2,0,0,0,7.14-3.16c3.06-1.56,6.22-3.2,8.31-5.93,3.26-4.26,3.16-10.16,5.2-15.13,3.69-9,13.87-13.66,23.53-14.87,5.61-.71,11.74-.71,16.18-4.22a12.27,12.27,0,0,0,4.39-7.25,2.61,2.61,0,0,0-.16-1.86,2.66,2.66,0,0,0-1.07-.86c-5.8-3.09-12.78-2.29-19.35-2.44-10.69-.23-21.11-3.17-31.45-5.88-4.38-1.15-9.11-2.25-13.33-.63-4,1.53-6.71,5.17-9.92,8-13.12,11.58-34.9,9.9-46.57,22.94-2.7,3-4.73,7.13-3.74,11.06.41,1.61,1.29,3.08,1.58,4.72.57,3.23-1.27,6.33-2.83,9.21s-2.92,6.4-1.47,9.33c2.23,4.48,9,4.15,12.53,7.7,1.64,1.65,2.42,4,4.13,5.6,2.74,2.52,6.93,2.32,10.63,2,2-.19,5.27-.85,4.7-3.53C367.29,466.84,364.12,465.81,365.87,462.83Z"
          transform="translate(-71.39 -32.23)"
          fill="#85596b"
        />
        <path
          d="M357,478s17.32-13,28.2-8.74,13.85,6.6,20.78,4,9.89,5.28,9.89,5.28L372.71,491Z"
          transform="translate(-71.39 -32.23)"
          fill="#f8f9fa"
        />
        <path
          d="M333.63,500.73s7.92-20.45,17.48-24.41"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M323.4,494.13s7.92-20.45,17.48-24.41"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M508.76,499.08s28-13.52,46.83-12.2,22.1-10.55,22.1-10.55"
          transform="translate(-71.39 -32.23)"
          opacity="0.05"
        />
        <path
          d="M387.63,836.64c-2.33-2.17-4.52-4.73-5.2-7.84s.65-6.85,3.63-8c3.33-1.28,6.9,1,9.6,3.37s5.8,5,9.33,4.5a14.21,14.21,0,0,1-4.39-13.3,5.56,5.56,0,0,1,1.22-2.7c1.85-2,5.21-1.13,7.42.43,7,5,9,14.53,9.05,23.15.71-3.11.11-6.35.13-9.54s.89-6.72,3.58-8.44a10.79,10.79,0,0,1,5.46-1.28c3.17-.12,6.7.2,8.86,2.52,2.69,2.88,2,7.71-.35,10.88s-5.9,5.16-9.17,7.35a20.34,20.34,0,0,0-6.55,6.25,6.19,6.19,0,0,0-.49,1.12H399.91A55.36,55.36,0,0,1,387.63,836.64Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
        <path
          d="M846.16,747.49a9.84,9.84,0,0,1-3.23-4.88c-.42-1.94.41-4.26,2.26-5,2.07-.79,4.29.64,6,2.1s3.6,3.11,5.8,2.8a8.83,8.83,0,0,1-2.73-8.27,3.45,3.45,0,0,1,.76-1.68c1.15-1.23,3.24-.7,4.62.27,4.38,3.08,5.6,9,5.63,14.39.44-1.93.07-3.95.08-5.93s.55-4.18,2.23-5.24a6.71,6.71,0,0,1,3.4-.8c2-.07,4.16.13,5.51,1.57,1.67,1.79,1.24,4.79-.22,6.76s-3.67,3.21-5.7,4.57a12.64,12.64,0,0,0-4.07,3.89,3.85,3.85,0,0,0-.3.69H853.79A34.41,34.41,0,0,1,846.16,747.49Z"
          transform="translate(-71.39 -32.23)"
          fill="#eca72c"
        />
      </svg>
      <LogInFormCont>
        <Link to="/" className="app-name">
          App name
        </Link>
        <h1>Log In</h1>
        <LogInForm>
          <input
            placeholder="Email"
            type="text"
            value={loginInfo.email}
            name="email"
            onChange={handleChange}
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
            required
          ></input>
          <button onClick={handleSubmit}>Log In</button>
          <GoogleButton />
          <button className="facebook-oauth">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14222 14222">
              <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
              <path
                d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                fill="#fff"
              />
            </svg>
            Log In with Facebook
          </button>
        </LogInForm>
        <div className="alternative">
          New user? Sign up{' '}
          <Link to="/signup" className="link">
            here
          </Link>
          .
        </div>
      </LogInFormCont>
    </LogInPageCont>
  );
}
