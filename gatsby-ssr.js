exports.onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: "en" });
  setBodyAttributes({
    className: "min-h-screen bg-[#000424] overflow-y-visible",
  });
};
