import { useCallback } from "react";

// CodeMirror Extensions
import CodeMirror from "@uiw/react-codemirror";
import { githubLight, githubDark } from "@uiw/codemirror-themes-all";

const InputEditor = ({ setInputValue, darkTheme }) => {
  const initialValue = "// Your Input goes here";

  const handleChange = useCallback((value, viewUpdate) => {
    setInputValue(value);
  }, []);

  return (
    <CodeMirror
      placeholder={initialValue}
      height="29vh"
      theme={darkTheme ? githubDark : githubLight}
      onChange={handleChange}
      basicSetup={{
        foldGutter: false,
      }}
    />
  );
};

export default InputEditor;
