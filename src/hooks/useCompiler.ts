import { useState } from 'react';

// Utils
import { preValueType } from '../utils/types';

const SUBMISSION_URL = 'http://localhost:3000/compile';

const useCompiler = (
  codeValue: string,
  language: string,
  inputValue: string | null,
  setOutputValue: (output: string) => void
) => {
  const [, setPreValue] = useState<preValueType>({
    code: null,
    lang: null,
    input: null,
  });

  const fetchData = () => {
    setOutputValue('Waiting...');
    setPreValue({ code: codeValue.trim(), lang: language, input: inputValue });
    const body = {
      lang: language,
      input: inputValue,
      code: codeValue,
    };

    fetch(SUBMISSION_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response.status) {
          setOutputValue(data.response.stderr);
        } else {
          setOutputValue(data.response.stdout);
        }
      })
      .catch((err) => {
        setOutputValue(err.message);
      });
  };
  return [fetchData];
};

export default useCompiler;
