import { Counter } from "../components/Counter";
import Container from "@mui/material/Container";

export const Landing = () => {
  return (
    <Container>
      <h2>
        Landing (Public: anyone can access this page)
        <Counter />
      </h2>
    </Container>
  );
};
