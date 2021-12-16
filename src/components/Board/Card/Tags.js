import React from "react";
import style from "./Tags.module.css";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";

const Tags = ({ tags }) => {
  return (
    <div className={style.tags_container}>
      {tags?.map((tag) => (
        <div style={{backgroundColor: tag.tagColor}} className={style.tag}>
          {tag.tagName}
        </div>
      ))}

      <button className={style.add_tag}>
        <IconContext.Provider value={{className: style.add_tag_btn_icon}}>
          <BsPlusLg />
        </IconContext.Provider>{" "}
        Добавить...
      </button>
    </div>
  );
};

export default Tags;
