export const saveVisit = (key, value) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    let newVisit = parseInt(data) + 1;
    localStorage.setItem(key, newVisit);
    return newVisit;
  } else {
    localStorage.setItem(key, 1);
    return 1;
  }
};
