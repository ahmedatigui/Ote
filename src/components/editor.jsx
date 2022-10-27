import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-themes-all";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";

const InputEditor = ({ lang }) => {
  const js = "// JS Code goes here";
  console.log("lang", lang);
  return (
    <CodeMirror
      placeholder={js}
      extensions={[javascript()]}
      height="89vh"
      theme={githubLight}
      lineBreak={true}
    />
  );
};

export default InputEditor;
