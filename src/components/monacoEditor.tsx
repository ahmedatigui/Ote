import MonacoEditor from '@uiw/react-monacoeditor';

const MoEditor = ({ lang }) => {
  console.log(lang);
  return (
    <MonacoEditor
      language={lang}
      defaultValue="Code Goes Here"
      options={{
        theme: 'vs-light',
      }}
    />
  );
};

export default MoEditor;
