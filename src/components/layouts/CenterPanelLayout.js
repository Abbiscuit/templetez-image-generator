import { useCustomizeTemplate } from '../../hooks/CustomTemplateProvider';

const CenterPanelLayout = ({ children, componentRef }) => {
  const { type } = useCustomizeTemplate();
  return (
    <>
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
          position: 'relative',
          maxWidth: 575,
          maxHeight: 575,
          margin: '0 auto',
          border: '1px solid #bbb',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default CenterPanelLayout;
