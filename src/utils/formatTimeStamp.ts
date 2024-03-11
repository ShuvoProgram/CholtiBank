export const formatTimestamp = (timestamp:any) => {
    // Implement your own logic for formatting the timestamp
    const date = new Date(timestamp);
    return date.toLocaleString();
  };