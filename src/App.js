import "./styles.css";
import React from "react";
import trie from "./Trie";
// import axios from "axios";

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
    "Biopharma",
    "biopharma",
    "Mathematica",
    "Psycology",
    "Sociology",
    "Social",
    "SocialScience",
    "Maths",
    "Math",
    "Anthropology",
    "Archaeology",
    "Area Studies",
    "Cultural and Ethnic Studies",
    "Economics",
    "Gender and Sexuality Studies",
    "Geography",
    "Political Science",
    "Psychology",
    "Sociology",
    "Agriculture",
    "Architecture and Design",
    "Business",
    "Divinity",
    "Education",
    "Engineering",
    "Environmental Studies and Forestry",
    "Family and Consumer Science",
    "Health Sciences",
    "Human Physical Performance and Recreation*",
    "Journalism, Media Studies and Communication",
    "Law",
    "Library and Museum Studies",
    "Military Sciences",
    "Public Administration",
    "Social Work",
    "Transportation",
    "Chemistry",
    "Earth Sciences",
    "Life Sciences",
    "Physics",
    "Space Sciences"
  ];

  React.useEffect(() => {
    /* I tried using axios over a local json file called subs.json,
    but due to some reason I am not able to in codesand as its preventing */
    // axios
    //   .get("subs.json")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((er) => {});

    /* Using local variable to populate trie datastructure */
    allValues.forEach((ele) => {
      ele = ele.toLowerCase();
      trie.addWord(ele);
    });
  });

  /* As autoVal updates, updating result from trie */
  React.useEffect(() => {
    const findSimilars = function () {
      return trie.autocompleteresult(autoVal.toLowerCase());
    };
    setShowResult(findSimilars());
  }, [autoVal]);

  return (
    <div className="App">
      <div className="container">
        <h1>Autocomplete</h1>

        <input
          className="nevada"
          value={autoVal}
          onChange={(e) => setAutoVal(e.target.value)}
        />

        <div className="auths">
          {showResult.map((item, index) => (
            <div key={index} className="nayest">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
