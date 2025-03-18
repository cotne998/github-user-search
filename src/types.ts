export interface IUserData {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  twitter_username: string | null;
  html_url: string;
}
