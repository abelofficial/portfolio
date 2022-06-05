import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IGithubProfile {
  name: string;
  avatar_url: string;
  followers: string;
  following: string;
  orgs: string;
  public_repos: string;
  total_private_repos: string;
}

export interface IGithubOrgs {
  avatar_url: string;
  description: string;
  events_url: string;
  hooks_url: string;
  id: number;
  issues_url: string;
  login: string;
  members_url: string;
  node_id: string;
  public_members_url: string;
  repos_url: string;
  url: string;
}

export interface IGithubRepos {
  avatar_url: string;
  description: string;
  events_url: string;
  hooks_url: string;
  id: number;
  issues_url: string;
  login: string;
  members_url: string;
  node_id: string;
  public_members_url: string;
  repos_url: string;
  url: string;
}
