const useLocalStorage = () => {
  const save = (data) => {
    localStorage.setItem("last_code", JSON.stringify(data));
  };

  const getLastSaved = () => {
    const data = localStorage.getItem("last_code");
    return JSON.parse(data);
  };

  return [save, getLastSaved];
};

export default useLocalStorage;
