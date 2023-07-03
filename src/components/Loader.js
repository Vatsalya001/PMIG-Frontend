import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="var(--primaryColor)"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};

export default Loader;
