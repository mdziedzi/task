import styled from "styled-components";

export const StyledFooter = styled.div`
  padding: ${(props) => props.theme.spacing.s};
  margin-top: ${(props) => props.theme.spacing.m};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray};
`;
