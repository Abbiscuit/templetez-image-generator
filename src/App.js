import React, { useRef } from 'react';
import CenterPanelLayout from './components/layouts/CenterPanelLayout';
import LeftPanel from './components/layouts/LeftPanel';
import RightPanel from './components/layouts/RightPanel';
import {
  CardCircle,
  PatternB,
  Practice,
  TempA,
  TempC,
  TempCard,
} from './components/SVGComponents';
import SvgClipbird from './components/SVGComponents/SvgClipbird';
import { useCustomizeTemplate } from './hooks/CustomTemplateProvider';

import useBase64Converter from './hooks/useBase64Converter';

const templates = [
  {
    id: 1,
    title: 'template_a',
    url:
      'https://images.unsplash.com/photo-1591693898234-f2bba7c8beaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHBhbGV0dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    tempInfo: {
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
    tempInfo: {
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
    tempInfo: {
      border: 1,
      title: 1,
      description: 0,
      illustration: 0,
    },
  },
];

function App() {
  const componentRef = useRef();

  /* Hooks */
  const { baseImage } = useBase64Converter();
  const {
    bgFill,
    borderFill,

    setTempType,
    setToggle,
  } = useCustomizeTemplate();

  // useEffect(() => {}, [tempType]);

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
              <Practice
                bgFill={bgFill}
                borderFill={borderFill}
                imgResource={baseImage}
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
