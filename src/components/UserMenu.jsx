import React, { useState } from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Trigger = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  background: #fff;
  border: 1px solid #d1d5db;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem;
  z-index: 10;
`;

const UserIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UserMenu = ({ name }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Trigger onClick={() => setOpen((o) => !o)}>
        <UserIcon />
        <span>{name}</span>
      </Trigger>
      {open && (
        <Dropdown>
          <LogoutButton />
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default UserMenu;
