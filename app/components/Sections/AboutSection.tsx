import Link from "next/link";
import { inter, poppins, robotoCondensed } from "../FontGoogle";
import Lanyard from "../Lanyard/Lanyard";
import Description from "../Text/Description";
import CountUp from "../CountUp/CountUp";
import TextType from "../Text/TextType/TextType";

export default function AboutSection() {
  return (
    <main
      id="about"
      className="w-full min-h-96 h-[35rem] shadow-sm py-6 px-6 flex justify-center items-center bg-primary "
    >
      <section className="w-1/2 h-full border border-slate-300 rounded-xl shadow-md overflow-hidden bg-white">
        <Lanyard
          fov={9}
          position={[0, 0, 29]}
          gravity={[0, -40, 0]}
          transparent={true}
        />
      </section>
      <section className="w-1/2  h-full flex flex-col justify-start items-center px-6">
        {/* small bold name */}
        <h1
          className={`${robotoCondensed.className} text-2xl shadow shadow-slate-200 cursor-pointer font-bold border border-slate-200 rounded-sm p-2 text-slate-200 animate-gradient`}
        >
          AboutMe
        </h1>
        <h1
          className={`${robotoCondensed.className} mt-6 text-5xl font-semibold text-white`}
        >
          I Am Available for
          <span className="text-neon-cyan"> Full-Stack Web Development </span>
          And
          <span className="text-aqua-hotpink"> UI/UX Desain</span>
        </h1>
        {/* <Description /> */}
        <h1>
          <TextType
            text={[
              "I build web applications with a focus on user experience and performance. I combine best practices in frontend and backend development to create aesthetically pleasing yet functional interfaces. My expertise includes React/Next.js, responsive design, and performance optimization to ensure apps run fast across a wide range of devices.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        <div
          className={`${inter.className} p-4 flex justify-center items-center gap-x-3`}
        >
          <div className="flex flex-col items-center justify-center gap-y-2 px-3 py-2 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80">
            <h1 className="text-4xl">
              <CountUp
                from={0}
                to={15}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-xs">Google Review</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 px-3 py-2 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80">
            <h1 className="text-4xl">
              <CountUp
                from={0}
                to={3}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-xs">Years Experience</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 px-3 py-2 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80">
            <h1 className="text-4xl">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-xs">Projects Done</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
