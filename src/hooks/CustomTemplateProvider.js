import { createContext, useContext, useState } from 'react';

export const CustomTempleteContext = createContext();

const CustomTemplateProvider = ({ children }) => {
  /* タイトル (title) */
  const [inputText, setInputText] = useState('始めよう！');
  const [inputText2, setInputText2] = useState('');
  const [inputText3, setInputText3] = useState('');

  /* 背景色 (bgColor) */
  const [bgFill, setBgFill] = useState('#ffffff');

  /* 枠線色 (borderColor) */
  const [borderFill, setBorderFill] = useState('#F9A826');
  /* 枠形 (borderShape) */
  const [changeShape, setChangeShape] = useState(true);
  /* 画像 (avatarImg) */
  const [character, setCharacter] = useState('');
  /* 説明文 (description) */
  const [textfill, setTextFill] = useState('#222222');

  /* テンプレートタイプ */
  const [type, setType] = useState({
    id: 1,
    tempInfo: { border: 1, title: 1, description: 0, illustration: 1 },
  });

  /* Utils */
  const [tempType, setTempType] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [displayCanvas, setDisplayCanvas] = useState('');

  const [baseImage, setBaseImage] = useState('');

  return (
    <CustomTempleteContext.Provider
      value={{
        inputText,
        inputText2,
        inputText3,
        bgFill,
        borderFill,
        changeShape,
        character,
        textfill,
        type,
        tempType,
        toggle,
        displayCanvas,
        baseImage,
        setInputText,
        setInputText2,
        setInputText3,
        setBgFill,
        setBorderFill,
        setChangeShape,
        setCharacter,
        setTextFill,
        setType,
        setTempType,
        setToggle,
        setDisplayCanvas,
        setBaseImage,
      }}
    >
      {children}
    </CustomTempleteContext.Provider>
  );
};

export default CustomTemplateProvider;

export const useCustomizeTemplate = () => useContext(CustomTempleteContext);
