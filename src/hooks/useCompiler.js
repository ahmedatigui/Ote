const URL =
  "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/";
const CLIENT_SECRET_KEY = "40c250a422c76ec28c22c7ac2038fa9aacd59b9a";

const languages = {
  cpp: "CPP",
  python: "PYTHON3",
  javascript: "JAVASCRIPT",
};

const fetchCompiler = (value, language) => {
  const request_body = {
    lang: languages[language],
    source: value,
    input: "",
    memory_limit: 243232,
    // time_limit: 5,
    context: "{'id': 213121}",
    callback: "https://client.com/callback/",
    id: "client-001",
  }

  fetch(URL, {
    method: "POST",
    headers: { "client-secret": CLIENT_SECRET_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(request_body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.warn(err));
};

export default fetchCompiler;
