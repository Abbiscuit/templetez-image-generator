const CenterPanelLayout = ({ children, componentRef }) => {
  return (
    <>
      <div className="h-16 mb-24 flex items-center border-b bg-gray-50"></div>

      <div
        id="capture"
        ref={componentRef}
        className="border mx-auto"
        style={{ maxWidth: 575, maxHeight: 575 }}
      >
        {/* Template comes here... */}
        {children}
      </div>
    </>
  );
};

export default CenterPanelLayout;
