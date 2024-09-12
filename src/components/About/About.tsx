import AboutImgOne from "../../assets/images/about/about1.avif";
import AboutImgTwo from "../../assets/images/about/about2.avif";
import AboutImgThree from "../../assets/images/about/about3.avif";
import AboutImgFour from "../../assets/images/about/about4.avif";
import AboutImgFive from "../../assets/images/about/about5.avif";

const About = () => {
  return (
    <section id="about" className="w-full max-w-[84.15rem] overflow-hidden">
      <div className="mt-8 mx-auto gap-x-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center overflow-hidden">
        <div className="w-full lg:shrink-0 xl:max-w-2xl">
          <h4 className="text-4xl font-bold tracking-tight sm:text-6xl">
            We’re changing people's shopping habit.
          </h4>
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-lg lg:max-w-none">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
            cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
            mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
            mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
            minim amet fugiat veniam occaecat aliqua.
          </p>
        </div>
        <div className="mt-14 flex justify-end gap-10 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
            <div className="relative">
              <img
                src={AboutImgOne}
                alt=""
                className="object-cover aspect-[2/3] w-full rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
          <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
            <div className="relative">
              <img
                src={AboutImgFour}
                alt=""
                className="object-cover aspect-[2/3] w-full rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div className="relative">
              <img
                src={AboutImgFive}
                alt=""
                className="object-cover aspect-[2/3] w-full rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
          <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
              <img
                src={AboutImgTwo}
                alt=""
                className="object-cover aspect-[2/3] w-full rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div className="relative">
              <img
                src={AboutImgThree}
                alt=""
                className="object-cover aspect-[2/3] w-full rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
