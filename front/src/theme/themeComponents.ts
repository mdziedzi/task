import styled from "styled-components";

export const StyledCard = styled.div`
  box-shadow: ${(props) => props.theme.color.shadow} 0 5px 20px;
  border-radius: ${(props) => props.theme.border.radius};
  padding: ${(props) => props.theme.spacing.s};
  margin: ${(props) => props.theme.spacing.xs};
`;
