const SUMBMISSION_URL = "https://codejudge.geeksforgeeks.org/submit-request";
const OUTPUT_URL = "https://codejudge.geeksforgeeks.org/get-status/";

const ls = {
  cpp: "cpp14",
  python: "python3",
  javascript: "js",
};

async function g(thed) {
  fetch(`${OUTPUT_URL}${thed}`, {
    headers: { "Sec-Fetch-Site": "same-site" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

const fetchCompiler = (value, language) => {
  const bd = {
    language: ls[language],
    code: value,
    input: "",
    save: false,
  };

  fetch(SUMBMISSION_URL, {
    method: "POST",
    body: JSON.stringify(bd),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .then((data) => {
      let t1 = setTimeout(async () => {
        const output = await g(data.id);
        console.log(output);
        return output;
      }, 3000);
    })
    .catch((err) => console.warn(err));
};

export default fetchCompiler;
