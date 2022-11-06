import { Maybe } from "graphql/jsutils/Maybe";
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

export interface IPageModule {
  allContacts: Array<IContactModule>;
  allTestimonials: Array<ITestimonialsModule>;
  allProjects: Array<IProjectModule>;
  allWorks: Array<IWorkModule>;
  allEducations: Array<IEducationModule>;
}

export interface IEducationModule {
  title: string;
  content: string;
  endDate: string;
  place: string;
  responsiveImage: ResponsiveImageType;
}

export interface IWorkModule {
  title: string;
  content: string;
  endDate: string;
  place: string;
  responsiveImage: ResponsiveImageType;
}

export interface IContactModule {
  icon: string;
  url: string;
  title: string;
  responsiveImage: ResponsiveImageType;
}
export interface IProjectModule {
  id: string;
  githubLink: string;
  description: string;
  title: string;
  url: string;
  name: string;
  techstack: string;
  medias: {
    responsiveImage: ResponsiveImageType;
  };
}
export interface ITestimonialsModule {
  id: string;
  name: string;
  text: string;
  workPlace: string;
  workPosition: string;
}

export declare type ResponsiveImageType = {
  /** The aspect ratio (width/height) of the image */
  aspectRatio: number;
  /** A base64-encoded thumbnail to offer during image loading */
  base64?: Maybe<string>;
  /** The height of the image */
  height?: Maybe<number>;
  /** The width of the image */
  width: number;
  /** The HTML5 `sizes` attribute for the image */
  sizes?: Maybe<string>;
  /** The fallback `src` attribute for the image */
  src?: Maybe<string>;
  /** The HTML5 `srcSet` attribute for the image */
  srcSet?: Maybe<string>;
  /** The HTML5 `srcSet` attribute for the image in WebP format, for browsers that support the format */
  webpSrcSet?: Maybe<string>;
  /** The background color for the image placeholder */
  bgColor?: Maybe<string>;
  /** Alternate text (`alt`) for the image */
  alt?: Maybe<string>;
  /** Title attribute (`title`) for the image */
  title?: Maybe<string>;
};
