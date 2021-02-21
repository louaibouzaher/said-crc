import styles from "../../styles/Card.module.css";
export const Card = ({ mission }) => {
  return (
    <div className="bg-white flex flex-1 flex-grow flex-col justify-start items-center p-4 py-6 m-2 shadow-xl rounded-md">
      <div
        className={"my-3 rounded-full " + styles.cardBg}
        style={{ backgroundImage: "url(" + mission.src + ")" }}
      ></div>
      <h1 className="text-2xl text-blue-900 my-3">{mission.title}</h1>
      <p className="text-sm text-blue-900">{mission.text}</p>
    </div>
  );
};
