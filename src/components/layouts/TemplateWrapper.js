import { Practice } from '../SVGComponents';
import SvgClipbird from '../SVGComponents/SvgClipbird';

const TemplateWrapper = props => {
  const { type, ...allProps } = props;
  return (
    <>
      {type.id === 1 && <SvgClipbird {...allProps} />}
      {type.id === 2 && <Practice {...allProps} />}
    </>
  );
};

export default TemplateWrapper;
