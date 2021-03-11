import React, { useRef } from 'react';
import CenterPanelLayout from './components/layouts/CenterPanelLayout';
import LeftPanel from './components/layouts/LeftPanel';
import RightPanel from './components/layouts/RightPanel';
import TemplateWrapper from './components/layouts/TemplateWrapper';

import { useCustomizeTemplate } from './hooks/CustomTemplateProvider';

const templates = [
  {
    id: 1,
    title: 'template_a',
    url:
      'https://images.unsplash.com/photo-1591693898234-f2bba7c8beaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    tempInfo: {
      border: 1,
      title: 1,
      description: 0,
      illustration: 1,
    },
  },
  {
    id: 2,
    title: 'template_b',
    url:
      'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    tempInfo: {
      border: 0,
      title: 1,
      description: 0,
      illustration: 1,
    },
  },
];

function App() {
  const componentRef = useRef();

  /* Hooks */
  const {
    bgFill,
    borderFill,
    baseImage,
    setTempType,
    setToggle,
    inputText,
    changeShape,
    type,
    inputText2,
    inputText3,
    character,
    textfill,
    tempType,
    toggle,
    displayCanvas,
  } = useCustomizeTemplate();

  const handleSelect = id => {
    setTempType(id);
  };

  const changeText = e => {
    setToggle(true);
  };

  return (
    <div className="App">
      <section>
        <div className="flex">
          <div className="w-1/4 h-screen bg-gray-50 border-r">
            <LeftPanel templates={templates} />
          </div>

          <div className="w-2/4">
            <CenterPanelLayout componentRef={componentRef}>
              <TemplateWrapper
                inputText={inputText}
                inputText2={inputText2}
                inputText3={inputText3}
                changeShape={changeShape}
                character={character}
                textfill={textfill}
                tempType={tempType}
                toggle={toggle}
                displayCanvas={displayCanvas}
                type={type}
                bgFill={bgFill}
                borderFill={borderFill}
                shape={changeShape}
                imgResource={baseImage}
                handleSelect={id => handleSelect(id)}
                changeText={changeText}
              />
            </CenterPanelLayout>
          </div>

          <div className="w-1/4 h-screen bg-gray-50 border-l overflow-y-scroll">
            <RightPanel />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
