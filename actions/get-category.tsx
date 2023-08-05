// import axios from 'axios';
// import { Category } from '@/types';

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategory = async (): Promise<Category[]> => {
//   try {
//     const response = await axios.get(URL);
//     return response.data;
//   } catch (error) {
//     // Handle the error here, you can log it or return an empty array or throw a custom error
//     console.error("Error while fetching categories:", error);
//     return [];
//   }
// };

// export default getCategory;

import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;