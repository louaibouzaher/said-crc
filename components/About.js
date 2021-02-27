export const AboutSection = () => {
  return (
    <div className="w-full h-screen p-12 flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-start p-4">
        <div className="text-6xl py-1 text-blue-900">About</div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          pariatur, laudantium iusto voluptatibus minus laboriosam libero,
          blanditiis at quod tempora, sunt sapiente? Distinctio nobis temporibus
          optio culpa dolorem delectus ab! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Molestiae, maiores? Ab quos a voluptas
          dignissimos maiores aspernatur ut aliquam in, obcaecati praesentium
          fuga placeat facilis optio iure error, nihil ad.
        </div>
      </div>
      <img
        src="/assets/favicon.jpg"
        alt=""
        style={{ animationDuration: "3s", marginBottom: -10 }}
        className=" h-3/4 m-auto animate-bounce"
      />
    </div>
  );
};
