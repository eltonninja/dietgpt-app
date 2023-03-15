import styled from "styled-components";
import { FaApple } from "react-icons/fa";
import { colors } from "../../values/colors";

export function SigninButton({ className }) {
  return (
    <SButton className={className}>
      <SFaApple size={20} color={colors.white} />
      Sign in with Apple
    </SButton>
  );
}

const SButton = styled.button({
  display: "flex",
  width: "100%",
  maxWidth: 345,
  padding: 12,
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
  background: colors.black,
  color: colors.white,
  borderRadius: 99999,
  fontSize: 18,
});

const SFaApple = styled(FaApple)({
  marginTop: -5,
});
