import { useState } from "react";
import { useCallback } from "react";

const SUMBMISSION_URL = "https://codejudge.geeksforgeeks.org/submit-request";
const OUTPUT_URL = "https://codejudge.geeksforgeeks.org/get-status/";

const ls = {
  cpp: "cpp14",
  python: "python3",
  javascript: "js",
};

const useCompiler = (codeValue, language, setLoading, setData) => {
  const [preValue, setValue] = useState({ code: null, lang: null });
  const fetchData = () => {
    // prevent running the same code and language
    if (
      codeValue === "" ||
      (codeValue.trim() === preValue.code && preValue.lang === language)
    )
      return;
    else setValue({ code: codeValue.trim(), lang: language });

    const getIt = (d) =>
      setTimeout(
        () =>
          fetch(`${OUTPUT_URL}${d.id}`, {
            headers: { "Sec-Fetch-Site": "same-site" },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.status === "in-queue") {
                setData(data.status);
                console.log(data.status);
                getIt(d);
              } else if (data.status === "SUCCESS" && data.errorCode === "") {
                setLoading(false);
                setData(data.output);
                console.log(data.output);
              } else if (
                data.status === "SUCCESS" &&
                data.errorCode === "RTE"
              ) {
                setLoading(false);
                setData(data.rntError);
                console.log(data.rntError);
              } else if (data.status === "SUCCESS" && data.errorCode === "CE") {
                setLoading(false);
                setData(data.cmpError);
                console.log(data.cmpError);
              }
            }),
        1000
      );

    console.log(codeValue, language);
    console.log(codeValue.length);

    const bd = {
      language: ls[language],
      code: codeValue,
      input: "",
      save: false,
    };
    setLoading(true);

    fetch(SUMBMISSION_URL, {
      method: "POST",
      body: JSON.stringify(bd),
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
        setData(err);
        setLoading(false);
      });
  };
  return [fetchData];
};

export default useCompiler;
