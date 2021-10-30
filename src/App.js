import "./styles.css";
import React from "react";
import trie from "./Trie";

export default function App() {
  const [autoVal, setAutoVal] = React.useState("");
  const [showResult, setShowResult] = React.useState([]);
  const allValues = [
    "BPharma",
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Biochemistry",
    "Pharma",
    "Biopharma"
  ];

  React.useEffect(() => {
    allValues.forEach((ele) => {
      // console.log(ele);
      ele = ele.toLowerCase();
      trie.addWord(ele);
    });
  });

  const findSimilars = function () {
    return trie.autocompleteresult(autoVal.toLowerCase());
  };

  const setAutoCompleteFunc = function (val) {
    setAutoVal(val);
    // const abc = setInterval(() => {
    //   setShowResult(findSimilars());
    //   // console.log(findSimilars());
    // }, 0);
    // setTimeout(() => {
    //   clearInterval(abc);
    // }, 90);
  };
  React.useEffect(() => {
    setShowResult(findSimilars());
  }, [autoVal]);

  return (
    <div className="App">
      <div>
        <h1>Autocomplete</h1>

        <input
          value={autoVal}
          onChange={(e) => setAutoCompleteFunc(e.target.value)}
        />

        <div className="auths">
          {showResult.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
