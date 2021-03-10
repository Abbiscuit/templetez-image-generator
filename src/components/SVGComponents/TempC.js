import * as React from 'react';
import { WomanA, WomanB } from '.';
import Image from '../../images/photo.jpeg';

function SvgTempC(props) {
  return (
    <svg
      width={575}
      height={575}
      viewBox="0 0 575 575"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M575 0H0v575h575V0z" fill="#fff" />
      <path d="M575 575V315.1H0V575h575z" fill={props.bgFill} />
      <path
        d="M65.23 105.351c0 6.814.45 12.728 1.349 17.744.898 5.017 2.508 9.172 4.829 12.466 2.395 3.22 5.39 4.829 8.984 4.829 2.77 0 5.129-.935 7.075-2.808 2.022-1.946 3.557-4.641 4.605-8.085 1.123-3.444 1.909-7.113 2.358-11.006.524-3.968.786-8.348.786-13.14 0-4.941-.262-9.471-.786-13.588-.524-4.119-1.385-7.825-2.583-11.119-1.123-3.294-2.695-5.84-4.717-7.636-1.946-1.872-4.267-2.808-6.962-2.808-3.52 0-6.44 1.647-8.76 4.941-2.321 3.22-3.93 7.375-4.83 12.466-.898 5.016-1.347 10.931-1.347 17.744zm-13.251 0c0-8.46.824-15.797 2.47-22.011 1.648-6.215 3.894-10.969 6.739-14.263 2.845-3.294 5.84-5.69 8.984-7.188 3.145-1.497 6.477-2.245 9.996-2.245 8.984 0 15.947 4.005 20.888 12.016 4.942 7.936 7.412 19.166 7.412 33.691 0 13.851-2.396 24.932-7.187 33.242-4.717 8.236-11.68 12.354-20.89 12.354-3.518 0-6.85-.748-9.994-2.246-3.145-1.498-6.14-3.893-8.984-7.188-2.845-3.294-5.129-8.048-6.851-14.262-1.722-6.215-2.583-13.514-2.583-21.9zm81.421-21.45c0 4.118 1.235 7.45 3.706 9.995 2.545 2.546 5.653 3.819 9.321 3.819 3.744 0 6.813-1.273 9.209-3.819 2.471-2.62 3.706-5.952 3.706-9.995 0-3.893-1.198-7.15-3.594-9.77-2.395-2.62-5.502-3.931-9.321-3.931-3.893 0-7.037 1.31-9.433 3.93-2.396 2.621-3.594 5.878-3.594 9.771zm-15.835 41.216c0-5.915 1.535-10.744 4.605-14.488 3.144-3.743 6.813-6.401 11.005-7.973-8.61-4.118-12.915-10.557-12.915-19.316 0-6.813 2.471-12.466 7.412-16.959 5.017-4.492 11.268-6.737 18.755-6.737 7.487 0 13.701 2.245 18.643 6.737 5.016 4.493 7.524 10.146 7.524 16.959 0 4.717-1.235 8.685-3.706 11.904-2.47 3.22-5.578 5.69-9.321 7.412 4.417 1.572 8.161 4.267 11.23 8.086 3.07 3.818 4.605 8.647 4.605 14.487 0 7.637-2.696 13.851-8.086 18.643-5.391 4.717-12.354 7.075-20.889 7.075-8.086 0-14.936-2.284-20.552-6.85-5.54-4.642-8.31-10.969-8.31-18.98zm13.139-.674c0 4.567 1.461 8.385 4.381 11.455 2.994 2.995 6.775 4.492 11.342 4.492s8.311-1.497 11.231-4.492c2.995-3.07 4.492-6.888 4.492-11.455 0-4.492-1.497-8.31-4.492-11.455-2.92-3.219-6.664-4.829-11.231-4.829-4.492 0-8.236 1.572-11.23 4.717-2.995 3.144-4.493 7-4.493 11.567z"
        fill="#F8DACB"
      />

      <text fill="#000" x="98" y="121" fontSize="50">
        {props.text}
      </text>

      <image href={Image} x="33" y="117" height="500px" width="500px" />

      <text fill="#000" x="400" y="550" fontSize="24" textAnchor="middle">
        {props.text2}
      </text>

      {props.character === 'typeC' && <WomanA />}
      {props.character === 'typeD' && <WomanB />}
    </svg>
  );
}

export default SvgTempC;
