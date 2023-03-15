import { ThreeDots } from "react-loader-spinner";
import { colors } from "../values/colors";

export function Loader({ className }) {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={colors.grey}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      className={className}
    />
  );
}
