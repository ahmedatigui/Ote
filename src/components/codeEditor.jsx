import { useCallback, useEffect, useState } from "react";

// CodeMirror Extensions
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { githubLight, githubDark } from "@uiw/codemirror-themes-all";

const CodeEditor = ({ lang, setCodeValue, codeValue, darkTheme }) => {
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
      value={codeValue ? codeValue : initialValue}
      extensions={[proLang.language]}
      height="89vh"
      theme={darkTheme ? githubDark : githubLight}
      onChange={handleChange}
    />
  );
};

export default CodeEditor;
