import { DefaultSeo, NextSeo } from "next-seo";
import React from "react";

export const DefaultSEOMetadata = () => {
  return (
    <DefaultSeo
      additionalLinkTags={[
        {
          rel: "icon",
          href: "images/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          href: "images/favicon-16x16.png",
          sizes: "16x16",
        },
      ]}
      openGraph={{
        url: "https://abelsintaro.com/",
        title: "Abel Sintaro Portfolio",
        description:
          "Portfolio for Abel Sintaro, a software engineer based in Stockholm, Sweden.",
        siteName: "Portfolio",
        type: "profile",
        images: [
          {
            url: "https://abelsintaro.com/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F69084876%3Fv%3D4&w=256&q=75",
            width: 300,
            height: 300,
            alt: "Portfolio image",
            type: "image/jpeg",
          },
        ],
        profile: {
          firstName: "Abel",
          lastName: "Sintaro",
        },
      }}
    />
  );
};

export const HomePageMetadata = () => {
  return (
    <NextSeo
      title='Portfolio | Abel Sintaro'
      description='Home page for Abel Sintaro, a software engineer based in Stockholm, Sweden.'
      canonical='https://abelsintaro.com/'
    />
  );
};

export const TimelinePageMetadata = () => {
  return (
    <NextSeo
      title='Timeline | Abel Sintaro'
      description='Timeline page for Abel Sintaro, a software engineer based in Stockholm, Sweden.'
      canonical='https://abelsintaro.com/timeline'
    />
  );
};

export const BlogPageMetadata = () => {
  return (
    <NextSeo
      title='Blog | Abel Sintaro'
      description='Blog page for Abel Sintaro, a software engineer based in Stockholm, Sweden.'
      canonical='https://abelsintaro.com/blog'
    />
  );
};
