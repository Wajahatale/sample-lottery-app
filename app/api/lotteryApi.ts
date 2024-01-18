import axios from "axios";

const BASE_URL =
  "https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=";

export const getLotteryData = async (lotteryType: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${lotteryType}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching lottery data", error);
    return null;
  }
};
