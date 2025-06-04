import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #374151;
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  width: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }
`;

const Error = styled.span`
  color: #b91c1c;
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
