export interface Contributor {
  name: string;
  role?: string;
  picture: string;
  contactLinks: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}
