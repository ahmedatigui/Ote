import { useCallback, useEffect, useState } from "react";

// CodeMirror Extensions
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { githubLight } from "@uiw/codemirror-themes-all";


const CodeEditor = ({ lang, setCodeValue }) => {
  const [proLang, setProLang] = useState({ language: cpp(), value: "cpp" });
  const [initialValue, setInitialValue] = useState(
    "// Your C++ code goes here"
  );

  // handle language change
  useEffect(() => {
    if (lang !== proLang.value) {
      setProLang({
        language:
          lang === "cpp" ? cpp() : lang === "python" ? python() : javascript(),
        value: lang,
      });
      setInitialValue(
        `${lang === "python" ? "#" : "//"} Your ${
          lang === "cpp" ? "C++" : lang === "python" ? "Python" : "Javascript"
        } code goes here`
      );
    }
  }, [lang]);


  const handleChange = useCallback((value, viewUpdate) => {
    setCodeValue(value);
  }, []);

  return (
    <CodeMirror
      placeholder={initialValue}
      extensions={[proLang.language]}
      height="89vh"
      theme={githubLight}
      onChange={handleChange}
    />
  );
};

const InputEditor = ({ setInputValue }) => {
  const [initialValue, setInitialValue] = useState(
    "// Your Input goes here"
  );

  // value => `${initialValue}\n\n${value}`
  const handleChange = useCallback((value, viewUpdate) => {
    setInputValue(value);
  }, []);

  return (
    <CodeMirror
      placeholder={initialValue}
      height="29vh"
      theme={githubLight}
      onChange={handleChange}
      basicSetup={{
        foldGutter: false,
      }}
      />
      );
};

const OutputEditor = ({ outputValue }) => {

  return (
    <CodeMirror
      value={outputValue}
      height="60vh"
      theme={githubLight}
      readOnly={true}
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        indentOnInput: false,
        lineNumbers: false
      }}
      />
      );
    };
    
    export { CodeEditor, InputEditor, OutputEditor };
    