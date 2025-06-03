import React from "react";
import styled from "styled-components";

const ToastWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${({ type }) =>
    type === "error" ? "#e74c3c" : type === "success" ? "#2ecc71" : "#f39c12"};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;

const Toast = ({ message, type = "info" }) => {
  return <ToastWrapper type={type}>{message}</ToastWrapper>;
};

export default Toast;
