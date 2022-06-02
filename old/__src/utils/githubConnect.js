import axios from "axios";

export const GithubConnect = axios.create({
  baseURL: `https://api.github.com/`,

  headers: {
    authorization: `Basic ${process.env.NEXT_PUBLIC_GITHUB_KEYS}`,
  },
});
