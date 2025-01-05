import Compare from "../components/Compare";
import CompareServerComponent from "../components/CompareServerComponent";

const page = () => {
  return (
    <div>
      Compare Page!
      <Compare>
      <CompareServerComponent/>
      </Compare>
    </div>
  );
};

export default page;