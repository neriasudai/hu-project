import "./Lecturer.css";
import { ILecturer } from "../../globalTypes";

type Props = {
  data: ILecturer;
};

export const Lecturer: React.FC<Props> = ({ data }) => {
  return (
    <div className="lecturer">
      <h1>{data.name}</h1>
      <h3>{data.email}</h3>
    </div>
  );
};
