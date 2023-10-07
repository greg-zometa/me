import { type CollectionEntry } from "astro:content";

// TODO: Update when directories have posts
// - search and update the promises in `posts` variables
// - update CollectionEntry generic types from CollectionKey keys
// CollectionEntry<"blog" | "coding" | "comptia" | "cybersecurity" | "ethical-hacking">
export type PostsCollection = CollectionEntry<"blog" | "comptia">;

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  // eslint-disable-next-line no-unused-vars
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";
