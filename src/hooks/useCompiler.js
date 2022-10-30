import { useEffect, useState } from "react";

const SUMBMISSION_URL = "https://codejudge.geeksforgeeks.org/submit-request";
const OUTPUT_URL = "https://codejudge.geeksforgeeks.org/get-status/";

const ls = {
  cpp: "cpp14",
  python: "python3",
  javascript: "js",
};

const useCompiler = (value, language, setOutput) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = () => {
    let gData = null;
    const bd = {
      language: ls[language],
      code: value,
      input: "",
      save: false,
    };
    // setLoading(true);

    fetch(SUMBMISSION_URL, {
      method: "POST",
      body: JSON.stringify(bd),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let t1 = setTimeout(() => {
          fetch(`${OUTPUT_URL}${data.id}`, {
            headers: { "Sec-Fetch-Site": "same-site" },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // setData(data);
              gData = data
              // setLoading(false);
              if(gData.compResult === "S"){
                setOutput(gData.output)
                console.log(gData.output)
              }else if(gData.compResult === "F"){
                setOutput(gData.cmpError)
                console.log(gData.cmpError)
              }
            })
            .catch((err) => {
              console.warn(err);
              // setError(err);
              // setLoading(false);
            });
        }, 3000);
        
      })
      .catch((err) => {
        console.warn(err);
        // setError(err);
        // setLoading(false);
      });


    return gData;
  }
  return [fetchData]
  // return [loading, data, error];
};

export default useCompiler;
