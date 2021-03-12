import styles from "../../styles/About.module.css"

export const Card = ({ children, style,  }) => {
  return (
    <div
      className={
        "w-72 bg-white rounded-md p-4 pb-14 shadow-2xl " + styles.fallenImage
      }
      style={style}
    >
      {children}
    </div>
  );
};
