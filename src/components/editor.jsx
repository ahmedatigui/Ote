import { useCallback, useEffect, useState } from "react";


// CodeMirror Editor
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { githubLight } from "@uiw/codemirror-themes-all";


const InputEditor = ({ lang, setCodeValue }) => {
  const [proLang, setProLang] = useState({ language: cpp(), value: "cpp" });
  const [initialValue, setInitialValue] = useState(
    "// Your C++ code goes here"
  );

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

export default InputEditor;
