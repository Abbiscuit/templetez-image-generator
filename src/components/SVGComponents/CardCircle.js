import * as React from 'react';
import { ManA, ManB, WomanA, WomanB } from './index';

function SvgCardCircle(props) {
  const { character, bgFill, text } = props;
  return (
    <svg
      width={575}
      height={575}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#card_circle_svg__clip0)">
        <path fill={bgFill} d="M0 0h575v575H0z" />

        <rect
          x={17.5}
          y={18.5}
          width={539}
          height={539}
          rx={269.5}
          fill="#fff"
        />
        <rect
          x={17.5}
          y={18.5}
          width={539}
          height={539}
          rx={269.5}
          stroke="#C8C8C8"
        />

        <text
          // onClick={() => {
          //   changeText();
          //   handleSelect('text');
          // }}
          fontSize="56"
          fill={'#333'}
          textAnchor="middle"
          x="300"
          y="300"
        >
          {text}
        </text>

        {character === 'typeA' && <ManA />}
        {character === 'typeB' && <ManB />}
        {character === 'typeC' && <WomanA />}
        {character === 'typeD' && <WomanB />}
      </g>
      <defs>
        <clipPath id="card_circle_svg__clip0">
          <path fill="#fff" d="M0 0h575v575H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCardCircle;
