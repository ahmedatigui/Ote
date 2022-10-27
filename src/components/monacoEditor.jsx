import MonacoEditor from "@uiw/react-monacoeditor"

const MoEditor = ({lang}) => {

    console.log(lang)
    return (
        <MonacoEditor
            language={lang}
            placeholder="Code Goes Here"
            options={{
                theme: 'vs-dark'
            }}
        />
    )
}

export default MoEditor