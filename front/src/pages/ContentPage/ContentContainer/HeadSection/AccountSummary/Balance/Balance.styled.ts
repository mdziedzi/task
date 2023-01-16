import styled from "styled-components";

export const StyledBalance = styled.div`
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.s};
`;
export const StyledBalanceValue = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-size: 1.5rem;
`;
