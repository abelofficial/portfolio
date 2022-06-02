import { VercelConnect } from "@local-utils/vercelConnect";

export const getVercelProjects = async () => {
  try {
    const response = await VercelConnect.get("projects");
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return;
};
