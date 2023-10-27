const Head = () => {
  return (
    <div className="w-full h-auto py-12 bg-secondryBackground flex flex-col items-center justify-around text-center gap-y-6">
      <a
        href="https://github.com/"
        className="text-[4rem] md:text-[9rem] hover:text-blue-500 transition-colors font-bold text-blue-600"
      >
        KADIR
      </a>
      <p>A Turkish frontend developer who enjoys writing code. Also student.</p>
      <p className="text-gray-700">
        There is a secret code here. Can you find it? Test yourself!
      </p>
    </div>
  );
};

export default Head;
