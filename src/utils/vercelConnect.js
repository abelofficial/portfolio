import axios from "axios";

export const VercelConnect = axios.create({
  baseURL: `https://api.vercel.com/v9/`,

  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_TOKEN}`,
  },
});
