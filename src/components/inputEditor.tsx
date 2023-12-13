import { useCallback } from 'react';

// CodeMirror Extensions
import CodeMirror from '@uiw/react-codemirror';
import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';

const InputEditor = ({
  setInputValue,
  darkTheme,
}: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  darkTheme: boolean;
}) => {
  const initialValue = '// Your Input goes here';

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return (
    <CodeMirror
      placeholder={initialValue}
      height="29vh"
      theme={darkTheme ? solarizedDark : solarizedLight}
      onChange={handleChange}
    />
  );
};

export default InputEditor;
