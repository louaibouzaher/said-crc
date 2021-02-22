export const Testimonials = () => {
  return (
    <div className="w-full p-10 flex flex-col items-start relative">
      <h1 className="sm:text-6xl text-4xl sm:px-5 px-2 py-4 text-white tracking-tight bg-yellow-500 rounded-md shadow-lg">
        <span className="z-20"> They said about us</span>
      </h1>
      <img
        src="/assets/quote.svg"
        alt=""
        className="sm:h-32 h-20 absolute right-4 top-32 sm:top-20 sm:right-10"
      />
      {/* Testimonials */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10">
          <img
            src="/assets/testimonial1.jpg"
            alt=""
            className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
          />
          <div className="p-10">
            <p className="text-blue-900">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae necessitatibus voluptate, vero minima saepe
              sequi sint assumenda ipsum corporis eligendi mollitia dicta quidem
              dignissimos est error a. Possimus, beatae?
            </p>
            <br />
            <i className="text-gray-900">Name of Person</i>
            <p className="text-gray-900 text-sm">Role/Title</p>
          </div>
        </div>
        <div className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10">
          <img
            src="/assets/testimonial1.jpg"
            alt=""
            className="sm:w-1/5 w-1/2 rounded-full shadow-2xl sm:order-2"
          />
          <div className="p-10 sm:order-1">
            <p className="text-blue-900">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae necessitatibus voluptate, vero minima saepe
              sequi sint assumenda ipsum corporis eligendi mollitia dicta quidem
              dignissimos est error a. Possimus, beatae?
            </p>
            <br />
            <i className="text-gray-900">Name of Person</i>
            <p className="text-gray-900 text-sm">Role/Title</p>
          </div>
        </div>
        <div className="sm:w-3/4 flex sm:flex-row flex-col justify-center items-center sm:px-10  pt-10">
          <img
            src="/assets/testimonial1.jpg"
            alt=""
            className="sm:w-1/5 w-1/2 rounded-full shadow-2xl"
          />
          <div className="p-10">
            <p className="text-blue-900">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum recusandae necessitatibus voluptate, vero minima saepe
              sequi sint assumenda ipsum corporis eligendi mollitia dicta quidem
              dignissimos est error a. Possimus, beatae?
            </p>
            <br />
            <i className="text-gray-900">Name of Person</i>
            <p className="text-gray-900 text-sm">Role/Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};
