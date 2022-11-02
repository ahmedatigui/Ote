// CodeMirror Extensions
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-themes-all";

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
        lineNumbers: false,
      }}
    />
  );
};

export default OutputEditor
