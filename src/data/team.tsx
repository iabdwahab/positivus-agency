import MemberCard from "../components/team_section/MemberCard";
import { teamMemberInterface } from "../types/team";

export const teamMembersList: teamMemberInterface[] = [
  {
    id: 0,
    name: "John Doe",
    position: "Digital Marketing Specialist",
    description: "+5 years of experience in digital marketing. Expertise in SEO, PPC, and social media marketing.",
    picture: "/team/member-1.svg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 1,
    name: "John Smith",
    position: "Director of Operations",
    description: "+8 years of experience in operations management. Proven track record in optimizing processes and improving efficiency.",
    picture: "/team/member-2.svg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Alice Johnson",
    position: "Senior SEO Specialist",
    description: "+5 years of experience in SEO and content marketing. Skilled in keyword research and on-page optimization.",
    picture: "/team/member-3.svg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export const teamMembersElements = teamMembersList.map((member) => {
  return <MemberCard key={member.id} data={member} />;
});
