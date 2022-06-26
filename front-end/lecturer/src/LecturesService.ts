import axios from "axios";
import { useEffect, useState } from "react";
import { ILecturer } from "./globalTypes";

export const useLectures = () => {
  const [lecturers, setLecturers] = useState<ILecturer[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [filteredLecturers, setFilteredLecturers] = useState<ILecturer[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (selectedLanguage == null) {
      setFilteredLecturers(lecturers);
    } else {
      setFilteredLecturers(
        lecturers.filter((l) => l.languages.indexOf(selectedLanguage) >= 0)
      );
    }
  }, [lecturers, selectedLanguage]);

  useEffect(() => {
    axios
      .get<ILecturer[]>("http://localhost:3000/api/lecturers")
      .then(({ data }) => {
        const LanguagesSet = new Set<string>();
        for (let lecturer of data) {
          for (let language of lecturer.languages) {
            LanguagesSet.add(language);
          }
        }

        setLecturers(data);
        setLanguages([...LanguagesSet]);
      })
      .catch((error: any) => {
        setError(error.response.data);
      });
  }, []);

  return {
    selectedLanguage,
    setSelectedLanguage,
    languages,
    filteredLecturers,
    error,
  };
};
