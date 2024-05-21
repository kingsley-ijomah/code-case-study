import React, { useEffect } from "react";
import s from "./Tags.module.scss";
import { fetchTags } from "../Api";

export const Tags = ({ tagList, tags, setTags, setTagList }) => {
  const handleSelect = (i) => {
    if (tags === i) {
      setTags(null);
      isTagSelected(null);
    } else {
      setTags(i);
      isTagSelected(i);
    }
  };

  const isTagSelected = (value) => tags === value;
  const highlight = {
    backgroundColor: "#43d5b0",
    boxShadow: "#43d5b0 0px 4px 0px",
  };

  useEffect(() => {
    const getTags = async () => {
      let tags = [];
      const tagList = await fetchTags();
      tagList.map((i) => {
        tags.push(Object.values(i.tags));
      });
      setTagList([...new Set(tags.flat())]);
    };
    getTags();
  }, []);

  return (
    <div className={s.wrapper}>
      <h3>Filter by Tag</h3>
      <div className={s.tagContainer}>
        {tagList &&
          tagList.map((i, index) => (
            <div
              key={index}
              className={s.tag}
              onClick={() => handleSelect(i)}
              style={isTagSelected(i) ? highlight : null}
            >
              {i}
            </div>
          ))}
      </div>
    </div>
  );
};
