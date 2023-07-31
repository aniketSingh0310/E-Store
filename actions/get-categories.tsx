import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (error) {
    // Handle the error here, you can log it or return an empty array or throw a custom error
    console.error("Error while fetching categories:", error);
    return [];
  }
};

export default getCategories;
