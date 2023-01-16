import styled from "styled-components";
import { size } from "../../../../theme/theme";

export const StyledHeadSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${size.laptop}) {
    flex-direction: column-reverse;
  }
`;
