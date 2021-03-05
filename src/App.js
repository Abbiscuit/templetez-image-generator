import React, { useRef, useState } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import SvgClipbird from './components/SVGComponents/SvgClipbird';

function App() {
  const componentRef = useRef();
  const [borderFill, setBorderFill] = useState('#F9A826');
  const [bgFill, setBgFill] = useState('#ffffff');
  const [textfill, setTextFill] = useState('#222222');
  const [inputText, setInputText] = useState('始めよう！');

  const [string, setString] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [changeShape, setChangeShape] = useState(true);
  const [character, setCharacter] = useState('woman');

  const handleSelect = id => {
    setString(id);
  };

  const changeText = e => {
    setToggle(true);
  };

  return (
    <div className="App">
      <section>
        <div className="flex">
          <div className="w-3/4">
            <Header title="Templetez 📷🔥" href="/" />
            <div
              ref={componentRef}
              style={{ maxWidth: 575, maxHeight: 575, margin: '0 auto' }}
            >
              <SvgClipbird
                bgFill={bgFill}
                borderFill={borderFill}
                text={inputText}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
                shape={changeShape}
                character={character}
                textfill={textfill}
              />
            </div>
          </div>
          <div className="w-1/4 h-screen bg-gray-50 border-l">
            <div className="h-16 mb-24 flex items-center border-b"></div>
            <div className="px-4">
              {string === 'backgroundFill' && (
                <Input
                  type="color"
                  id="backgroundFill"
                  name="backgroundFill"
                  label="背景カラー"
                  value={bgFill}
                  onChange={e => setBgFill(e.target.value)}
                />
              )}

              {string === 'borderFill' && (
                <Input
                  type="color"
                  id="borderFill"
                  name="borderFill"
                  label="枠線カラー"
                  value={borderFill}
                  onChange={e => setBorderFill(e.target.value)}
                />
              )}

              {toggle && (
                <>
                  <div className="pb-6 mb-12 border-b">
                    <div className="text-sm mb-2 ">テキスト</div>
                    <Input
                      type="text"
                      id=""
                      name="text"
                      value={inputText}
                      onChange={e => setInputText(e.target.value)}
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
                </>
              )}

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
                <div className="text-sm mb-2 ">イラスト選択</div>

                <button
                  onClick={() => setCharacter('woman')}
                  className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                >
                  Type A
                </button>

                <button
                  onClick={() => setCharacter('man')}
                  className="px-4 py-2 border rounded-md bg-gray-50 focus:bg-gray-200 mr-4"
                >
                  Type B
                </button>
              </div>

              <div className="pb-6 mb-12 border-b">
                <Button
                  type="button"
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
