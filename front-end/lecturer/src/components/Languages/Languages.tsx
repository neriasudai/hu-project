import "./Languages.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

// Why I chose to use the front
// Because the amount of information I have is small,
// there is no reason to create a service that will turn to the server each time to receive the data

type LanguagesProps = {
  languages: string[];
  selected: string | null;
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Languages: React.FC<LanguagesProps> = ({
  languages,
  selected,
  onSelect,
}) => {
  return (
    <div className="languages">
      <h4>Filter By Language</h4>
      <h5>{selected ?? ""}</h5>
      <select
        className="filter__select"
        value={selected ?? ""}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const value = e.target.value;
          onSelect(value === "" ? null : value);
        }}
      >
        <option value="">All</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};
