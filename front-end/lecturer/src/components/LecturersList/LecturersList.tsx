import "./LecturersList.css";
import { ILecturer } from "../../globalTypes";
import { Lecturer } from "../Lecturer";

type Props = {
  data: ILecturer[];
};

export const LecturersList: React.FC<Props> = ({ data }) => {
  return (
    <div className="lecturers_list">
      {data.map((lecturer, index) => {
        return <Lecturer key={index} data={lecturer} />;
      })}
    </div>
  );
};
