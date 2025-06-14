import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  padding: 1rem;
  font-family: "Inter", sans-serif;
  transition: background 0.5s ease;
`;

export const StyledCard = styled(Card)`
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 1000px;
  min-height: 500px;
  background-color: #ffffffee;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem auto;
`;

const FormLayout = ({ children }) => {
  return (
    <Container>
      <StyledCard>{children}</StyledCard>
    </Container>
  );
};

export default FormLayout;
