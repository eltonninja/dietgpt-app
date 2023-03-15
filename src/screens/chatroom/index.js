import styled from "styled-components";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { Header } from "./Header";
import { colors } from "../../values/colors";

export function ChatRoomScreen() {
  return (
    <SWrapper>
      <SHeader />
    </SWrapper>
  );
}

const SWrapper = styled(Wrapper)({
  background: colors.dark,
});

const SHeader = styled(Header)({
  marginTop: 12,
});
