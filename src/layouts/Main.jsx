import {
  SiJavascript,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const Main = () => {
  return (
    <div className="w-[90%] md:w-full md:px-20 gap-y-12">
      <h1 className="text-[2rem] font-bold text-center">Who Am I?</h1>
      <p className="text-left block">
        I&apos;m Kadir, a frontend developer who&apos;s currently a student in
        Turkey. I work primarily with languages like Javascript, Typescript, and
        Python, and I have a particular fondness for using React.js and Next.js.
        I&apos;m passionate about web development and always striving to enhance
        my skills. As the saying goes, &ldquo;The only way to do great work is
        to love what you do&rdquo; and I truly believe in that. I&apos;m
        dedicated to my craft and committed to staying at the forefront of this
        ever-evolving field.
      </p>
      <p className="mt-6">
        I&apos;m flexible and open to working with a diverse team. I believe
        that collective creativity and collaboration can lead to innovative
        solutions. My strong coding skills and dedication to web development
        make me a valuable asset in any project, and I&apos;m always eager to
        learn and adapt to new challenges.
      </p>

      <p className="flex flex-row mt-6 text-center items-center gap-x-1 md:gap-x-2 justify-center">
        In short, I am a <SiJavascript />, <SiTypescript /> and <SiReact />{" "}
        developer.
      </p>
    </div>
  );
};

export default Main;
