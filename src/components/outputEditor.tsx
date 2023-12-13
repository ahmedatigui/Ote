import CodeMirror from '@uiw/react-codemirror';

// CodeMirror Extensions
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';

const OutputEditor = ({
  outputValue,
  darkTheme,
}: {
  outputValue: string;
  darkTheme: boolean;
}) => {
  return (
    <CodeMirror
      value={outputValue}
      placeholder={"Your out output will be here"}
      height="60vh"
      theme={darkTheme ? solarizedDark : solarizedLight}
      readOnly={true}
    />
  );
};

export default OutputEditor;
