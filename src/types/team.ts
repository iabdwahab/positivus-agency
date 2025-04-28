export interface teamMemberInterface {
  id: number;
  name: string;
  position: string;
  description: string;
  picture: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}
