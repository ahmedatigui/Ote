// CodeMirror Extensions
import CodeMirror from "@uiw/react-codemirror";
import { githubDark, githubLight } from "@uiw/codemirror-themes-all";

const OutputEditor = ({ outputValue, darkTheme }) => {
  return (
    <CodeMirror
      value={outputValue}
      height="60vh"
      theme={darkTheme ? githubDark : githubLight}
      readOnly={true}
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        indentOnInput: false,
        lineNumbers: false,
      }}
    />
  );
};

export default OutputEditor;
