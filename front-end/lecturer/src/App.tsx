import { LecturersList } from "./components/LecturersList";
import { Languages } from "./components/Languages";
import "./App.css";
import { useLectures } from "./LecturesService";

function App() {
  const {
    languages,
    filteredLecturers,
    selectedLanguage,
    setSelectedLanguage,
  } = useLectures();

  return (
    <div className="App">
      <Languages
        languages={languages}
        selected={selectedLanguage}
        onSelect={setSelectedLanguage}
      />
      <LecturersList data={filteredLecturers} />
    </div>
  );
}

export default App;
