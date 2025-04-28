import facebookIcon from "/social/facebook-dark.svg";
import twitterIcon from "/social/twitter-dark.svg";
import linkedinIcon from "/social/linkedin-dark.svg";

import { teamMemberInterface } from "../../types/team";

function MemberCard({ data }: { data: teamMemberInterface }) {
  const { name, position, description, picture, socialLinks } = data;
  const { facebook, linkedin, twitter } = socialLinks;

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-b-4 p-6 pb-10">
      <div className="grid h-fit grid-cols-[auto_1fr] gap-4 px-2">
        <div>
          <img src={picture} alt="Member" className="h-24 w-24 object-contain" />
        </div>

        <div className="flex flex-col justify-between">
          <div className="mt-2 ml-auto flex gap-1">
            <a href={facebook} target="_blank">
              <img src={facebookIcon} alt="Facebook Logo" className="h-8 w-8" />
            </a>
            <a href={twitter} target="_blank">
              <img src={twitterIcon} alt="Twitter Logo" className="h-8 w-8" />
            </a>
            <a href={linkedin} target="_blank">
              <img src={linkedinIcon} alt="Linkedin Logo" className="h-8 w-8" />
            </a>
          </div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-sm">{position}</p>
        </div>
      </div>

      <hr />

      <p className="px-2">{description}</p>
    </div>
  );
}
export default MemberCard;
