export const Testimonials = () => {
  return (
    <div className="w-full p-10 flex flex-col items-start relative">
      <h1 className="text-6xl py-4 text-white tracking-tight bg-yellow-500 px-5 rounded-md shadow-lg">
        <span className="z-20"> They said about us</span>
      </h1>
      <img
        src="/assets/quote.svg"
        alt=""
        className="h-32 absolute left-2/4 top-16"
      />
      {/* Testimonials */}
      <div className="w-3/4 flex flex-row justify-center items-center px-10 py-16">
        <img
          src="/assets/testimonial1.jpg"
          alt=""
          className="w-1/5 rounded-full shadow-xl"
        />
        <div className="p-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            recusandae necessitatibus voluptate, vero minima saepe sequi sint
            assumenda ipsum corporis eligendi mollitia dicta quidem dignissimos
            est error a. Possimus, beatae?
          </p>
          <br />
          <h3>Name of Person</h3>
        </div>
      </div>
    </div>
  );
};
