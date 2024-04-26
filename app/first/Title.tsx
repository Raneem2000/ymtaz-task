import React from "react";

type Props = {
  text: string;
};
const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex justify-center mt-5 items-center text-black text-xl font-black">
      {text}
    </div>
  );
};

export default Title;
