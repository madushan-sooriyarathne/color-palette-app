const storage = window.localStorage;

// Reads the localStorage for given entry name,
// if there is no data for the entry, returns "null",
// if data cannot be parsed as JSON, returns "null",
// Otherwise returns a parsed JSON.
export const getData = (entry) => {
  const res = storage.getItem(entry);
  if (res) {
    let data;
    try {
      data = JSON.parse(res);
    } catch (err) {
      console.log(err.message);
      return null;
    }
    return data;
  } else {
    return null;
  }
};

// Set a local storage entry for given data under given entry name
export const setData = (entry, data) => {
  storage.setItem(entry, JSON.stringify(data));
};
