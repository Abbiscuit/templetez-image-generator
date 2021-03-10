import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import {
  CardCircle,
  PatternB,
  Practice,
  TempA,
  TempC,
  TempCard,
} from './components/SVGComponents';
import SvgClipbird from './components/SVGComponents/SvgClipbird';

import html2canvas from 'html2canvas';

const templates = [
  {
    id: 1,
    title: 'template_a',
    url:
      'https://images.unsplash.com/photo-1591693898234-f2bba7c8beaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    type: {
      border: 1,
      title: 1,
      description: 1,
      illustration: 1,
    },
  },
  {
    id: 2,
    title: 'template_b',
    url:
      'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    type: {
      border: 0,
      title: 1,
      description: 0,
      illustration: 1,
    },
  },
  {
    id: 3,
    title: 'template_c',
    url:
      'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    type: {
      border: 1,
      title: 1,
      description: 0,
      illustration: 0,
    },
  },
];

function App() {
  const componentRef = useRef();

  /* タイトル (title) */
  const [inputText, setInputText] = useState('始めよう！');
  const [inputText2, setInputText2] = useState('');
  const [inputText3, setInputText3] = useState('');

  /* 背景色 (bgColor) */
  const [bgFill, setBgFill] = useState('#ffffff');
  const [bgImage, setBgImage] = useState(
    'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  );

  /* 枠線色 (borderColor) */
  const [borderFill, setBorderFill] = useState('#F9A826');
  /* 枠形 (borderShape) */
  const [changeShape, setChangeShape] = useState(true);
  /* 画像 (avatarImg) */
  const [character, setCharacter] = useState('');
  /* 説明文 (description) */
  const [textfill, setTextFill] = useState('#222222');

  /* テンプレートタイプ */
  const [type, setType] = useState(0);

  /* Utils */
  const [tempType, setTempType] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [displayCanvas, setDisplayCanvas] = useState('');

  useEffect(() => {}, [tempType]);

  const handleSelect = id => {
    setTempType(id);
  };

  const changeText = e => {
    setToggle(true);
  };

  // const printDocument = () => {
  //   html2canvas(document.getElementById('capture')).then(canvas => {
  //     document.getElementById('capture').appendChild(canvas);
  //   });
  // };

  const printDocument = async () => {
    // 画像に変換する component の id を指定
    const target = document.getElementById('capture');
    const canvas = await html2canvas(target);
    const targetImgUri = canvas.toDataURL('img/png');
    target.appendChild(canvas);
    // saveAsImage(targetImgUri);
  };

  const saveAsImage = async uri => {
    const downloadLink = document.createElement('a');

    if (typeof downloadLink.download === 'string') {
      downloadLink.href = uri;

      // ファイル名
      downloadLink.download = 'component.png';

      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);

      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();

      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };

  return (
    <div className="App">
      <section>
        <div className="flex">
          {/* Left Panel */}
          <div className="w-1/4 h-screen bg-gray-50 border-r">
            <Header title="Templetez 📷🔥" href="/" />
            <div className="flex items-center"></div>
            <div className="px-4">
              <div className="pb-6 mb-12 border-b">
                <div className="text-sm mb-2 ">イラスト選択</div>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map(template => (
                    <figure
                      key={template.id}
                      id={template.id}
                      type={template.type}
                      onClick={() => {
                        console.log(template.type);
                        setType(template.type);
                      }}
                    >
                      <img
                        className="h-full w-full max-h-40 object-cover"
                        src={template.url}
                        alt={template.title}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel */}
          <div className="w-2/4">
            <div className="h-16 mb-24 flex items-center border-b bg-gray-50"></div>
            <p className="bg-pink-100">{`テンプレの種類(一時的表示): 
            Border: ${type.border}
            Title: ${type.title}
            Description: ${type.description}
            Illustration: ${type.illustration}`}</p>
            <div
              id="capture"
              ref={componentRef}
              style={{
                maxWidth: 575,
                maxHeight: 575,
                margin: '0 auto',
                border: '1px solid #bbb',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1471666875520-c75081f42081?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Practice bgFill={bgFill} borderFill={borderFill} />
              {/* <SvgClipbird
                bgFill={bgFill}
                borderFill={borderFill}
                text={inputText}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              />

              <TempCard
                bgFill={bgFill}
                borderFill={borderFill}
                text={inputText}
                text2={inputText2}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              /> */}

              {/* <TempC
                bgImage={bgImage}
                bgFill={bgFill}
                text={inputText}
                text2={inputText2}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              /> */}

              {/* <PatternB
                bgFill={bgFill}
                borderFill={borderFill}
                text={inputText}
                text2={inputText2}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              /> */}
              {/* <CardCircle
                bgFill={bgFill}
                borderFill={borderFill}
                text={inputText}
                text2={inputText2}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              /> */}
            </div>
          </div>
          {/* Right Panel */}
          <div className="w-1/4 h-screen bg-gray-50 border-l overflow-y-scroll">
            <div className="h-16 mb-24 flex items-center border-b"></div>
            <div className="px-4">
              <div className={tempType === 'backgroundFill' && `outline-black`}>
                <Input
                  type="color"
                  id="backgroundFill"
                  name="backgroundFill"
                  label="背景カラー"
                  value={bgFill}
                  onChange={e => setBgFill(e.target.value)}
                />
              </div>

              {type.border > 0 && (
                <div className={tempType === 'borderFill' && `outline-black`}>
                  <Input
                    type="color"
                    id="borderFill"
                    name="borderFill"
                    label="枠線カラー"
                    value={borderFill}
                    onChange={e => setBorderFill(e.target.value)}
                  />
                </div>
              )}

              {type.title > 0 &&
                [...Array(type.title + type.description)].map((_, i) => {
                  return (
                    <div
                      className={`pb-6 mb-12 border-b ${
                        tempType === 'text' && `outline-black`
                      }`}
                      key={i}
                    >
                      <div className="text-sm mb-2 ">テキスト</div>
                      <Input
                        type="text"
                        id=""
                        name="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                      />
                      <Input
                        type="text"
                        id=""
                        name="text"
                        value={inputText2}
                        onChange={e => setInputText2(e.target.value)}
                      />
                      <Input
                        type="color"
                        id="textfill"
                        name="textfill"
                        label="テキストカラー"
                        value={textfill}
                        onChange={e => setTextFill(e.target.value)}
                      />
                    </div>
                  );
                })}

              <div className="pb-6 mb-12 border-b">
                <div className="text-sm mb-2 ">シェイプ</div>

                <button
                  onClick={() => setChangeShape(!changeShape)}
                  className="mr-4"
                >
                  <img
                    src="/rectanble.png"
                    alt=""
                    className="w-12 h-12 flex justify-center items-center mx-auto"
                  />
                </button>

                <button
                  onClick={() => setChangeShape(!changeShape)}
                  className="mr-4"
                >
                  <img
                    src="/blob.png"
                    alt=""
                    className="w-12 h-12 flex justify-center items-center mx-auto"
                  />
                </button>
              </div>

              <div className="pb-6 mb-12 border-b">
                {type.illustration > 0 && (
                  <>
                    <div className="text-sm mb-2 ">イラスト選択</div>

                    <button
                      onClick={() => setCharacter('typeA')}
                      className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                    >
                      Type A
                    </button>

                    <button
                      onClick={() => setCharacter('typeB')}
                      className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                    >
                      Type B
                    </button>
                    <button
                      onClick={() => setCharacter('typeC')}
                      className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                    >
                      Type C
                    </button>
                    <button
                      onClick={() => setCharacter('typeD')}
                      className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                    >
                      Type D
                    </button>
                  </>
                )}
              </div>

              <div className="pb-6 mb-12 border-b">
                <Button type="button" onClick={() => printDocument()}>
                  HTML2CANVAS
                </Button>
                <Button
                  type="button"
                  // onClick={() => printDocument()}
                  onClick={() => exportComponentAsJPEG(componentRef)}
                >
                  画像をダウンロード
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
