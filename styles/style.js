import styled from "styled-components";
import { addOpacityToColor } from "./utils";
import { breakpoints, colors } from "./theme";
const backgroundColor = addOpacityToColor(colors.white, 0.85);

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 30vh;
  max-width: 60vh;
  padding: 0 2rem;
  border-radius: 10px;
  background-color: ${backgroundColor};
    @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
`;
