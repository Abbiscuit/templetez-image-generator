import { useCustomizeTemplate } from '../../hooks/CustomTemplateProvider';
import Header from '../Header';

import { tempArrays } from '../../utils/images';

const LeftPanel = ({ templates }) => {
  const { setType } = useCustomizeTemplate();

  return (
    <>
      <Header title="Templetez 📷🔥" href="/" />
      <div className="flex items-center"></div>
      <div className="px-4">
        <div className="pb-6 mb-12 border-b">
          <div className="text-sm mb-2 ">イラスト選択</div>
          <div className="grid grid-cols-2 gap-2">
            {templates?.map(template => {
              return (
                <figure
                  key={template.id}
                  id={template.id}
                  type={template.tempInfo}
                  onClick={() => {
                    setType(template);
                  }}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={tempArrays[template.id - 1]}
                    alt={template.title}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
