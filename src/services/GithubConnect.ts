import { HttpClientBase } from "@utils/HttpClient";
import { IGithubOrgs, IGithubProfile } from "@src/types";

export class GithubConnect extends HttpClientBase {
  public constructor() {
    super("https://api.github.com/", process.env.NEXT_PUBLIC_GITHUB_KEYS);
  }

  public getUser = () => this.instance.get<IGithubProfile>(`user`);

  // public getRepositories = () =>
  //   this.instance.get<IGithubProfile>(`users/abelofficial/repos`);

  public getUserOrgs = () => this.instance.get<IGithubOrgs[]>(`user/orgs`);
}
