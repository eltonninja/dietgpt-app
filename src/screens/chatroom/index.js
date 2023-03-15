import styled from "styled-components";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { colors } from "../../values/colors";
import { Header } from "./Header";

export function ChatRoomScreen() {
  return (
    <SWrapper>
      <Header />
    </SWrapper>
  );
}

const SWrapper = styled(Wrapper)({
  background: colors.dark,
});
