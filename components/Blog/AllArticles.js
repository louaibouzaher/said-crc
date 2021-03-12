import { ArticlePreview } from "./ArticlePreview";
export const AllArticles = () => {
  const articles = [
    {
      id: 1,
      date: Date(),
      picture: "/assets/bgHero.jpg",
      title: "Random Long Title To Put Here",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum, error sunt, in deserunt velit ab pariatur minus quos accusamus qui mollitia! Dicta vel placeat ut odio nesciunt, molestias amet",
    },
    {
      id: 2,
      date: Date(),
      picture: "/assets/bgHero.jpg",
      title: "random title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum, error sunt, in deserunt velit ab pariatur minus quos accusamus qui mollitia! Dicta vel placeat ut odio nesciunt, molestias amet",
    },
    {
      id: 3,
      date: Date(),
      picture: "/assets/bgHero.jpg",
      title: "random title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum, error sunt, in deserunt velit ab pariatur minus quos accusamus qui mollitia! Dicta vel placeat ut odio nesciunt, molestias amet",
    },
    {
      id: 5,
      date: Date(),
      picture: "/assets/bgHero.jpg",
      title: "random title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum, error sunt, in deserunt velit ab pariatur minus quos accusamus qui mollitia! Dicta vel placeat ut odio nesciunt, molestias amet",
    },
    {
      id: 4,
      date: Date(),
      picture: "/assets/bgHero.jpg",
      title: "random title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illum, error sunt, in deserunt velit ab pariatur minus quos accusamus qui mollitia! Dicta vel placeat ut odio nesciunt, molestias amet",
    },
  ];
  return (
    <div className="w-full p-10 flex sm:flex-row flex-col justify-center items-stretch flex-wrap  ">
      {articles.map((a) => (
        <ArticlePreview a={a} key={a.id} />
      ))}
    </div>
  );
};
