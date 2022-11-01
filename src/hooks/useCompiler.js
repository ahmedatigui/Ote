import { useState } from "react";

const SUMBMISSION_URL = "https://codejudge.geeksforgeeks.org/submit-request";
const OUTPUT_URL = "https://codejudge.geeksforgeeks.org/get-status/";

const languages = {
  cpp: "cpp14",
  python: "python3",
  javascript: "js",
};

const useCompiler = ([ codeValue, language, inputValue, setOutputValue ]) => {
  const [preValue, setPreValue] = useState({ code: null, lang: null, input: null });
  const fetchData = () => {
    // prevent running the same code and language
    if (
      codeValue === "" ||
      (codeValue.trim() === preValue.code && preValue.lang === language && preValue.input === inputValue)
    )
      return;
    else setPreValue({ code: codeValue.trim(), lang: language });

    const getIt = (d) =>
      setTimeout(async () => {
        setOutputValue("Loading the Output");
        return fetch(`${OUTPUT_URL}${d.id}`, {
          headers: { "Sec-Fetch-Site": "same-site" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "in-queue") {
              setOutputValue(data.status);
              getIt(d);
            } else if (data.status === "SUCCESS" && data.errorCode === "") {
              setOutputValue(data.output);
            } else if (data.status === "SUCCESS" && data.errorCode === "RTE") {
              setOutputValue(data.rntError);
            } else if (data.status === "SUCCESS" && data.errorCode === "CE") {
              setOutputValue(data.cmpError);
            }
          });
      }, 1000);

    const body = {
      language: languages[language],
      code: codeValue,
      input: inputValue,
      save: false,
    };

    setOutputValue("Sending Code");

    fetch(SUMBMISSION_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        getIt(data);
      })
      .catch((err) => {
        console.warn(err);
        setOutputValue(err);
      });
  };
  return [fetchData];
};

export default useCompiler;
