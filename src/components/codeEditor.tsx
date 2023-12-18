import { useCallback, useEffect, useState } from 'react';

// CodeMirror Extensions
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { cpp } from '@codemirror/lang-cpp';
import { csharp } from '@replit/codemirror-lang-csharp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';

const CodeEditor = ({
  lang,
  setCodeValue,
  codeValue,
  darkTheme,
}: {
  lang: string;
  setCodeValue: React.Dispatch<React.SetStateAction<string>>;
  codeValue: string;
  darkTheme: boolean;
}) => {
  const [proLang, setProLang] = useState({ language: [cpp()], value: 'cpp' });
  const [initialValue, setInitialValue] = useState<string>(
    '// Your C++ code goes here'
  );

  // handle language change
  useEffect(() => {
    if (lang !== proLang?.value) {
      switch (lang) {
        case 'cpp':
          setProLang({ language: [cpp()], value: lang });
          setInitialValue('// Your Cplusplus code here!');
          break;
        case 'py':
          setProLang({ language: [python()], value: lang });
          setInitialValue('# Your Python code here!');
          break;
        case 'java':
          setProLang({ language: [java()], value: lang });
          setInitialValue('// Your Java code here!');
          break;
        case 'cs':
          setProLang({ language: [csharp()], value: lang });
          setInitialValue('// Your CSharp code here!');
          break;
        case 'go':
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setProLang({ language: [StreamLanguage.define(go) as any], value: lang });
          setInitialValue('// Your GoLang code here!');
          break;
        default:
          break;
      }
    }
  }, [lang]);

  const handleChange = useCallback((value: string): void => {
    setCodeValue(value);
  }, []);

  return (
    <CodeMirror
      value={codeValue}
      extensions={proLang?.language}
      height="89vh"
      theme={darkTheme ? solarizedDark : solarizedLight}
      onChange={handleChange}
      placeholder={initialValue}
    />
  );
};

export default CodeEditor;
