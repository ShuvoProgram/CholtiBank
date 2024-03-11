export const formatDate = (dateString: any, formatString: any) => {
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);

  try {
    return date.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};
