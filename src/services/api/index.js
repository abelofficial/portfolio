import { GithubConnect } from "@local/src/utils/githubConnect";

export const getGithubUser = async () => {
  try {
    const response = await GithubConnect.get("user");
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const getGithubUserOrgs = async () => {
  try {
    const response = await GithubConnect.get("user/orgs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return;
};
