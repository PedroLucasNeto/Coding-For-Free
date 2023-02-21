export interface Site {
  name: string;
  description: string;
  images: {
    banner: string;
    aboutUs?: string;
    contact?: string;
    core?: string;
    pictures?: string;
  };
}
