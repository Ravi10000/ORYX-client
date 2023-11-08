import React from "react";

const Label = {};

const Bordered = ({ children }) => {
  const revampedChildern = React.Children.map(children, (child, index) => {
    if (child.type === undefined) return;
    if (typeof child.type === "function")
      return React.cloneElement(child, {
        size: 23,
      });
    return child;
  });

  return (
    <div className="py-2 px-4 rounded-full border border-blue-600 text-blue-600 w-max text-xs font-semibold center gap-2">
      {revampedChildern}
    </div>
  );
};

const Text = ({ children }) => {
  const revampedChildern = React.Children.map(children, (child, index) => {
    if (child.type === undefined) return;
    if (typeof child.type === "function")
      return React.cloneElement(child, {
        size: 25,
      });
    return child;
  });


  return (
    <div className="py-2 rounded-full text-gray-400 w-max text-base font-semibold center gap-2">
      {revampedChildern}
    </div>
  );
};

Label.Bordered = Bordered;
Label.Text = Text;

export default Label;
