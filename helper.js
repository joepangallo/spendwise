import { CATEGORIES } from "./constant";


export const getId = () => {
  return Math.random().toString(36).substring(2, 11);
};

export const getDate = (date) => {
  if (!date) return "Invalid Date";

  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

export const getCategoryColor = (categoryName) => {
  const category = CATEGORIES.find(
    (cat) => cat.name === categoryName
  );

  return category ? category.color : "#d1d5db"; // fallback gray
};