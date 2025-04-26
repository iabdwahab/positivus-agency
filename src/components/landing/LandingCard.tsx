import { Children, isValidElement } from "react";

function LandingCard({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children);

  const imageChild = childrenArray.find((child) => isValidElement(child) && child.type === LandingCard.Image);
  const textChildren = childrenArray.filter((child) => isValidElement(child) && child.type !== LandingCard.Image);

  return (
    <main className="container">
      <div className="bg-gray mb-4 grid items-center justify-center rounded-xl px-4 py-6 max-lg:text-center lg:grid-cols-2">
        <div>{imageChild}</div>
        <div>{textChildren}</div>
      </div>
    </main>
  );
}

LandingCard.Heading = function ({ text }: { text: string }) {
  return <h1 className="mb-6 text-4xl font-medium md:text-5xl lg:text-7xl">{text}</h1>;
};

LandingCard.Description = function ({ text }: { text: string }) {
  return <p>{text}</p>;
};

LandingCard.Image = function ({ src }: { src: string }) {
  return <img src={src} alt="Illustration" className="mx-auto w-full max-w-[450px]" />;
};

export default LandingCard;
