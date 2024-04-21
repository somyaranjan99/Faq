import { useState } from "react";
import "./styles.css";

const Faqitem = ({ faq, index }) => {
  const [ansShow, setAnsshow] = useState(false);
  const handleClick = () => {
    setAnsshow((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="faq__question">
        <button
          onClick={handleClick}
          className={`btn ${ansShow ? "arrow" : ""}`}
        >
          {">"}
        </button>
        <div>{faq.question}</div>
      </div>
      {ansShow && <div className="ans">{faq.answer}</div>}
    </div>
  );
};
export default Faqitem;
