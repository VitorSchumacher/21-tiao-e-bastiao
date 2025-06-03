import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #555;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Error = styled.span`
  color: red;
  font-size: 0.75rem;
`;

const Input = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
