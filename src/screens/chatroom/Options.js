import styled from "styled-components";
import { colors } from "../../values/colors";

export function Options({ options, className }) {
  return (
    <Wrapper className={className}>
      {options.map((option) => (
        <Option>{option}</Option>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  paddingBlock: 10,
});

const Option = styled.div({
  color: colors.white,
  padding: "12px 16px",
  borderRadius: 24,
  background: colors.grey,
});
