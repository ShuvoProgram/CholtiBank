export const setToLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") {
    // Handle the case where window is not defined (e.g., server-side rendering)
    return;
  }

  if (!key) {
    console.error("Key is required to set a value in local storage.");
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error while setting value in local storage:", error);
  }
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") {
    // Handle the case where window is not defined (e.g., server-side rendering)
    return null;
  }

  if (!key) {
    console.error("Key is required to get a value from local storage.");
    return null;
  }

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error while getting value from local storage:", error);
    return null;
  }
};
