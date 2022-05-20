import { GithubConnect } from "@local-utils/githubConnect";

export const getGithubUser = async () => {
  try {
    const response = await GithubConnect.get("user");
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const getGithubRepositories = async () => {
  try {
    const response = await GithubConnect.get("users/abelofficial/repos");
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
