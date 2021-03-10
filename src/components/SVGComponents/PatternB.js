import * as React from 'react';

function SvgPatternB(props) {
  const { bgFill, text } = props;
  return (
    <svg
      width={575}
      height={575}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill={bgFill} d="M0 0h575v575H0z" />
      <path fill="url(#Pattern_B_svg__pattern0)" d="M0 0h575v575H0z" />
      <defs>
        <pattern
          id="Pattern_B_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={0.139}
          height={0.139}
        >
          <use xlinkHref="#Pattern_B_svg__image0" transform="scale(.00174)" />
        </pattern>

        <text
          // onClick={() => {
          //   changeText();
          //   handleSelect('text');
          // }}
          fontSize="56"
          // fill={textfill}
          // textAnchor="middle"
          x="30"
          y="140"
        >
          {text}
        </text>

        <image
          id="Pattern_B_svg__image0"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgB7dLHdYRQEERRGEVDOiQklBAxakpmLOb736bepmt9T4+D4OZ5/ryeZZDb1zgITQPeuq6LSEAteBjiADXhIVGA2vCQGECNeEgEoFY81B1QMx7qCqgdD3UDtICHugBawUPNAS3hoaaA1vBQM0CLeKgJoFU8VB3QMh6qCmgdD1UD9ICHqgB6wUPFAT3hoaKA3vBQMUCPeKgIoFc8lA3oGQ9lAXrHQ8mAxPstCZB496IBifdcFCDx3gsGJN52QYDE2+8UkHjHHQIS77xdQOKFtQlIvPDeAIkX1xMg8eK7ARIvrR9A4qU3Ei+vy0C85PB8l0Fu4vGuZ5EKqAIPWyKgGjwkDVAVHpIEqA4PSQFUiYckAKrFQ70BVeOhnoDq8VAvQBN4qAegGTzUGtAUHmoJaA4PtQI0iYdaAJrFQ7UBTeOhmoDm8VAtQBd4qAagGzxUGtAVHioJ6A4PlQJ0iYdKALrFQ7mArvFQDqB7PJQKSLy/UgCJ91AsIPFeigEk3kahgMTbKQSQeAedARLvpCNA4gW0B0i8wLYAiRfRKyDxInsEJF5C/4DES+xjmqaReOl9AygujfqoEPrJAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

export default SvgPatternB;
