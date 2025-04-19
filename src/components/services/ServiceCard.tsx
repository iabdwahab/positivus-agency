import { serviceCardProps } from "../../types/services";

function ServiceCard({ theme, titleFirst, titleSecond, illustration }: serviceCardProps) {
  const colors = {
    green: {
      card: `bg-primary`,
      title: `bg-white`,
      link: {
        all: `text-secondary hover:bg-secondary hover:text-white`,
        icon: `text-primary bg-secondary group-hover:text-secondary group-hover:bg-primary`,
      },
    },
    dark: {
      card: `bg-secondary`,
      title: `bg-white`,
      link: {
        all: `text-white hover:bg-white hover:text-secondary`,
        icon: `text-secondary bg-white group-hover:text-white group-hover:bg-secondary`,
      },
    },
    light: {
      card: `bg-gray`,
      title: `bg-primary`,
      link: {
        all: `text-secondary hover:bg-secondary hover:text-white`,
        icon: `text-primary bg-secondary group-hover:text-secondary group-hover:bg-primary`,
      },
    },
  };

  return (
    <div className={`${colors[theme].card} border-secondary grid grid-cols-2 grid-rows-2 items-center rounded-4xl border border-b-[5px] p-8 md:gap-8 lg:p-12`}>
      <div className="grid items-stretch max-sm:col-span-2">
        <h3 className="flex w-fit flex-col text-2xl font-medium text-black">
          <span className={`${colors[theme].title} w-fit rounded-lg p-[2px]`}>{titleFirst}</span>
          <span className={`${colors[theme].title} w-fit rounded-lg p-[2px]`}>{titleSecond}</span>
        </h3>
      </div>

      <button className={`${colors[theme].link.all} duration-normal group row-start-2 flex w-fit cursor-pointer items-center gap-4 rounded border border-transparent px-3 py-2 transition`}>
        <span className={`${colors[theme].link.icon} rounded-full p-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 -rotate-[135deg]">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="text-lg font-medium max-sm:hidden">Learn more</span>
      </button>

      <div className="col-start-2 row-span-2">
        <img src={illustration} alt="Illustration" className="w-full" />
      </div>
    </div>
  );
}
export default ServiceCard;
