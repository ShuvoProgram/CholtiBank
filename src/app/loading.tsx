import { Spinner } from "@nextui-org/react";
const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-svh">
      <Spinner color="success" size="lg" />
    </div>
  );
};

export default LoadingPage;
