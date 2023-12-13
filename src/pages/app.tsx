import { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Hooks
import useCompiler from '../hooks/useCompiler';

// Utils
import {
  storeObjectToLocalStorage,
  getObjectFromLocalStorage,
} from '../utils/localStorageUtils';
// import { DataType } from '../utils/types';

// Components
import CodeEditor from '../components/codeEditor';
import InputEditor from '../components/inputEditor';
import OutputEditor from '../components/outputEditor';

function App() {
  // Code editor states
  const [language, setLanguage] = useState<string>('cpp');
  const [codeValue, setCodeValue] = useState<string>('');

  // Input editor states
  const [inputValue, setInputValue] = useState<string>('');

  // Output editor states
  const [outputValue, setOutputValue] = useState<string>('');

  // theme state
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  // Custom hooks
  const [fetchData] = useCompiler(
    codeValue,
    language,
    inputValue,
    setOutputValue,
  );

  // Event functions
  const getLast = () => {
    const data = getObjectFromLocalStorage();
    if (data?.language === undefined || data?.code === undefined) return;
    else {
      setLanguage(data.language);
      setCodeValue(data.code!);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setLanguage(e.target.value);
  const handleSubmit = () => {
    console.warn({ codeValue, language, inputValue });
    fetchData();
  };
  const handleSave = () => storeObjectToLocalStorage(language, codeValue);

  return (
    <main className="app">
      <nav className="upper-nav">
        <Link className="logo" to="/">
          <span>o;</span>
        </Link>
        <ul>
          <li title="Select programming language">
            <select value={language} onChange={handleChange}>
              <option title="Cplusplus programming language" value="cpp">
                C++
              </option>
              <option title="Python programming language" value="py">
                Python
              </option>
              <option title="Java programming language" value="java">
                Java
              </option>
              <option title="C programming language" value="c">
                C
              </option>
              <option title="Go programming language" value="go">
                Go
              </option>
              <option title="C# programming language" value="cs">
                C#
              </option>
            </select>
          </li>
          <li onClick={handleSubmit}>
            <button title="Run">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_42_1884)">
                  <path
                    d="M3.33325 10V5.28333C3.33325 3.34999 5.33325 2.125 6.97492 3.05L11.3499 5.50833L15.3833 7.76667C17.0999 8.73334 17.0999 11.275 15.3833 12.2417L11.3499 14.5L6.97492 16.9583C5.33325 17.8833 3.33325 16.65 3.33325 14.725V10.0083V10Z"
                    stroke="#565656"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42_1884">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <section>
        <nav>
          <ul>
            <li title="Get last saved">
              <button onClick={getLast}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.67989 10.36H5.3199C4.3899 10.36 3.63989 9.60999 3.63989 8.67999V5.32001C3.63989 4.39001 4.3899 3.64001 5.3199 3.64001H8.67989C9.60989 3.64001 10.3599 4.39001 10.3599 5.32001V8.67999C10.3599 9.60999 9.60989 10.36 8.67989 10.36Z"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6799 10.36H15.3199C14.3899 10.36 13.6399 9.60999 13.6399 8.67999V5.32001C13.6399 4.39001 14.3899 3.64001 15.3199 3.64001H18.6799C19.6099 3.64001 20.3599 4.39001 20.3599 5.32001V8.67999C20.3599 9.60999 19.6099 10.36 18.6799 10.36Z"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.67989 20.36H5.3199C4.3899 20.36 3.63989 19.61 3.63989 18.68V15.32C3.63989 14.39 4.3899 13.64 5.3199 13.64H8.67989C9.60989 13.64 10.3599 14.39 10.3599 15.32V18.68C10.3599 19.61 9.60989 20.36 8.67989 20.36Z"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6799 20.36H15.3199C14.3899 20.36 13.6399 19.61 13.6399 18.68V15.32C13.6399 14.39 14.3899 13.64 15.3199 13.64H18.6799C19.6099 13.64 20.3599 14.39 20.3599 15.32V18.68C20.3599 19.61 19.6099 20.36 18.6799 20.36Z"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li title="Save">
              <button onClick={handleSave}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6 19.1501H17.48C19.66 19.1501 21.25 16.7301 21.25 14.6901C21.2365 14.0244 21.0866 13.3687 20.8097 12.7632C20.5328 12.1578 20.1347 11.6156 19.64 11.1701C18.8605 10.4984 17.8461 10.1639 16.82 10.2401C16.7306 10.2497 16.6402 10.2416 16.554 10.2161C16.4678 10.1906 16.3875 10.1483 16.3177 10.0916C16.248 10.0348 16.1902 9.96483 16.1476 9.88561C16.1051 9.8064 16.0787 9.71954 16.07 9.63006C15.66 3.11006 5.89999 3.20006 5.74999 9.90006C5.74758 10.0368 5.70572 10.17 5.62944 10.2835C5.55316 10.3971 5.4457 10.4861 5.31999 10.5401C4.39568 10.9978 3.6507 11.7512 3.20324 12.6805C2.75578 13.6099 2.63145 14.662 2.84999 15.6701C2.97502 16.2979 3.23115 16.8924 3.60164 17.4145C3.97212 17.9366 4.44862 18.3747 4.99999 18.7001C5.69114 19.075 6.47611 19.2417 7.25999 19.1801H8.50999"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19.19V12.26"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.83008 14.2601L12.0001 12.1001L14.1701 14.2601"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li title="Toggle theme">
              <button onClick={() => setDarkTheme(!darkTheme)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4V5"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.34009 6.33997L7.05009 7.04997"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H5"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.34009 17.66L7.05009 16.95"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20V19"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.66 17.66L16.95 16.95"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12H19"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.66 6.33997L16.95 7.04997"
                    stroke="#090C02"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <div className="editors">
          <div className="code-input">
            <CodeEditor
              // className="code-input"
              lang={language}
              setCodeValue={setCodeValue}
              darkTheme={darkTheme}
              codeValue={codeValue}
            />
          </div>
          <div className="code-output">
            <InputEditor setInputValue={setInputValue} darkTheme={darkTheme} />
            <OutputEditor outputValue={outputValue} darkTheme={darkTheme} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
