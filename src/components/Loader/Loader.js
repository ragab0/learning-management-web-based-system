import Loade from "react-spinners/DotLoader";
import "./Loader.css";

export default function Loader({
  color = "var(--clr-grey-darker)",
  loading = true,
}) {
  return (
    <div className="main-loader">
      <Loade
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
