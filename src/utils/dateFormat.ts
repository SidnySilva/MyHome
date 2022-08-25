export const changeDateFormat = (date: string) => {
  const dateSplit = date.split("/");
  const newDate = `${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`;
  return newDate;
};
