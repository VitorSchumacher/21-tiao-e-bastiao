import styled from "styled-components";

const StyledBanner = styled.div`
  background: linear-gradient(135deg, #4f46e5, #6b5ce7, #8b5cf6);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  margin: -2rem -2rem 2rem;
`;

const DoubleDiagonalBanner = ({ children, ...props }) => {
  return <StyledBanner {...props}>{children}</StyledBanner>;
};

export default DoubleDiagonalBanner;
