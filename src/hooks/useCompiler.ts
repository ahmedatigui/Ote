import { useState } from 'react';

// Utils
import { preValueType } from '../utils/types';


const SUBMISSION_URL = 'http://localhost:3000/compile';

// const languages = {
//   cpp: 'cpp',
//   python: 'py',
//   // javascript: 'js',
// };


const useCompiler = (codeValue: string, language: string, inputValue: string | null, setOutputValue: (output: string) => void) => {
  const [ , setPreValue] = useState<preValueType>({
    code: null,
    lang: null,
    input: null,
  });
  const fetchData = () => {
    // // prevent running the same code and language
    // if (
    //   codeValue === '' ||
    //   (codeValue.trim() === preValue.code &&
    //     preValue.lang === language &&
    //     preValue.input === inputValue)
    // )
    //   return;
    // else setPreValue({ code: codeValue.trim(), lang: language, input: inputValue });
    setPreValue({ code: codeValue.trim(), lang: language, input: inputValue });

    /*
    // const getIt = (d) =>
    //   setTimeout(async () => {
    //     setOutputValue('Loading the Output');
    //     return fetch(`${OUTPUT_URL}/${d.id}`, {
    //       headers: { 'Sec-Fetch-Site': 'same-site' },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.status === 'in-queue') {
    //           setOutputValue(data.status);
    //           getIt(d);
    //         } else if (data.status === 'SUCCESS' && data.errorCode === '') {
    //           setOutputValue(data.output);
    //         } else if (data.status === 'SUCCESS' && data.errorCode === 'RTE') {
    //           setOutputValue(data.rntError);
    //         } else if (data.status === 'SUCCESS' && data.errorCode === 'CE') {
    //           setOutputValue(data.cmpError);
    //         }
    //       });
    //   }, 3500);

    // const body = {
    //   language: languages[language],
    //   code: codeValue,
    //   input: inputValue,
    //   save: false,
    // };

    // setOutputValue('Sending Code');

    // fetch(SUBMISSION_URL, {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     getIt(data);
    //   })
    //   .catch((err) => {
    //     console.warn(err);
    //     setOutputValue(err);
    //   });

    // const body = {
    //   language: languages[language],
    //   code: codeValue,
    //   input: inputValue,
    //   save: false,
    // };
    
    // const body = {
    //   language: languages[language],
    //   code: codeValue,
    //   input: inputValue,
    //   save: false,
    // };

    */

    const body = {
      lang: language,
      input: inputValue,
      code: codeValue,
    };

    console.log("Body: ", body)

    fetch(SUBMISSION_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response: ", data);
        if(data.response.status){
          setOutputValue(data.response.stderr);
        }else {
          setOutputValue(data.response.stdout);
        }
      })
      .catch((err) => {
        console.warn(err);
        setOutputValue(err.message);
      });
  };
  return [fetchData];
};

export default useCompiler;
