import { useCustomizeTemplate } from '../../hooks/CustomTemplateProvider';
import useBase64Converter from '../../hooks/useBase64Converter';
import useHtml2Canvas from '../../hooks/useHtml2Canvas';
import Button from '../Button';
import Input from '../Input';

const RightPanel = () => {
  const {
    tempType,
    bgFill,
    setBgFill,
    type,
    borderFill,
    setBorderFill,
    inputText,
    inputText2,
    setInputText,
    setInputText2,
    setTextFill,
    textfill,
    setChangeShape,
    changeShape,
    setCharacter,
  } = useCustomizeTemplate();
  const { printDocument, onClickExport } = useHtml2Canvas();
  const { uploadImage } = useBase64Converter();

  return (
    <>
      <div className="h-16 mb-24 flex items-center border-b"></div>
      <div className="px-4">
        <div className={tempType === 'backgroundFill' ? `outline-black` : ''}>
          <Input
            type="color"
            id="backgroundFill"
            name="backgroundFill"
            label="背景カラー"
            value={bgFill}
            onChange={e => setBgFill(e.target.value)}
          />
        </div>

        {type.tempInfo && type.tempInfo.border > 0 && (
          <div className={tempType === 'borderFill' ? `outline-black` : ''}>
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

        {type.tempInfo &&
          type.tempInfo.title > 0 &&
          [...Array(type.tempInfo.title + type.tempInfo.description)].map(
            (_, i) => {
              return (
                <div
                  className={`pb-6 mb-12 border-b ${
                    tempType === 'text' ? `outline-black` : ''
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
            }
          )}

        <div className="pb-6 mb-12 border-b">
          <div className="text-sm mb-2 ">シェイプ</div>

          <button onClick={() => setChangeShape(!changeShape)} className="mr-4">
            <img
              src="/rectanble.png"
              alt=""
              className="w-12 h-12 flex justify-center items-center mx-auto"
            />
          </button>

          <button onClick={() => setChangeShape(!changeShape)} className="mr-4">
            <img
              src="/blob.png"
              alt=""
              className="w-12 h-12 flex justify-center items-center mx-auto"
            />
          </button>
        </div>

        <div className="pb-6 mb-12 border-b">
          {type.tempInfo && type.tempInfo.illustration > 0 && (
            <>
              <div className="text-sm mb-2 ">イラスト選択</div>

              <input
                type="file"
                onChange={e => {
                  setCharacter('original');
                  uploadImage(e);
                }}
              />
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
          <Button type="button" onClick={() => printDocument('capture')}>
            HTML2CANVAS
          </Button>
          <Button type="button" onClick={() => onClickExport()}>
            HTML2CANVAS Download
          </Button>
          {/* <Button
                  type="button"
                  // onClick={() => printDocument()}
                  onClick={() => exportComponentAsJPEG(componentRef)}
                >
                  画像をダウンロード
                </Button> */}
        </div>
      </div>
    </>
  );
};

export default RightPanel;
