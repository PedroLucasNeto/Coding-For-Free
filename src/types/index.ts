export interface ICollaborator {
  name: string;
  role?: string;
  picture: string;
  contactLinks: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface IProcess {
  title: string;
  topics: string[];
  image: string;
}

export interface ISite {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  siteLink: string;
  developedBy: string;
}
