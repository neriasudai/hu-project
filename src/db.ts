// interface Lecturer {
//   id: string;
//   name: string;
//   email: string;
//   languages: number[];
// }

// interface Language {
//   id: number;
//   name: string;
// }

// interface DBMock {
//   Lecturers: Lecturer[];
//   Languages: Language[];
// }

import db from "../db.json";

export const getLecturers = () => {
  const LanguageMap = new Map<number, string>();
  for (const language of db.Languages) {
    LanguageMap.set(language.id, language.name);
  }

  return db.Lecturers.map((lecturer) => ({
    id: lecturer.id,
    email: lecturer.email,
    name: lecturer.name,
    languages: lecturer.languages.map((id) => LanguageMap.get(id)),
  }));
};
