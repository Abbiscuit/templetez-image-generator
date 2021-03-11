import * as React from 'react';
import logo from '../../images/photo.jpeg';

function Practice(props) {
  return (
    <svg
      version="1.1"
      baseProfile="full"
      fill="none"
      width={575}
      height={575}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect height="100%" width="100%" fill="none"></rect>

      <circle cx="150" cy="100" r="80" fill="green"></circle>

      <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
        SVG
      </text>

      <rect x="0" y="0" width="100" height="100" fill="white" />

      <ellipse
        cx="175"
        cy="175"
        rx="70"
        ry="35"
        fill="white"
        stroke="black"
        strokeWidth="2"
        strokeOpacity="0.25"
      ></ellipse>

      {/* <path d="M 10 10 H 90 V 90 H 10 L10 10" fill="black"></path> */}
      {/* <circle cx="100" cy="100" r="30" fill="red"></circle> */}

      <rect
        style={{
          y: 250,
          x: 150,
          stroke: props.borderFill,
          strokeWidth: 5,
          fill: props.bgFill,
          width: 200,
          height: 200,
        }}
      ></rect>

      <circle
        style={{
          cx: 150,
          cy: 600,
          r: 80,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
        }}
      ></circle>

      <text x="60" y="500" fill="black">
        This is bold text{'   '}
        <tspan fontWeight="bold" fill="red" fontSize="32">
          This is bold and red{'   '}
        </tspan>
        This is bold text{'   '}
      </text>

      <g fill="red">
        <rect x="0" y="0" width="10" height="10" transform="translate(40,40)" />
        <rect x="20" y="0" width="10" height="10" />
        {/* <image
          x="90"
          y="-65"
          width="128"
          height="146"
          transform="rotate(5)"
          href={logo}
        /> */}

        {props.imgResource && (
          <image
            xlinkHref={props.imgResource}
            height="200"
            width="200"
            style={{ y: 250, x: 400 }}
          />
        )}
      </g>
    </svg>
  );
}

export default Practice;
