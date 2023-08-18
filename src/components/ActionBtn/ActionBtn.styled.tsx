import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ActionBtnProps {
  children: string;
  isLink: boolean;
  to?: string; // Опційний параметр, але потрібно явно вказати тип
  type?: 'button' | 'reset' | 'submit';
}

const ActionBtnBase = styled.button`
  display: block;
  padding: 10px;
  background-color: red;
  border: none;

  &:hover {
    background-color: green;
  }
  /* Додайте ваші спільні стилі тут */
`;

const ActionLinkBase = styled(Link)`
  display: block;
  /* Додайте ваші спільні стилі тут */
`;

export const ActionBtnStyled = ({ isLink, ...props }: ActionBtnProps) => {
  if (isLink) {
    const { to, children, ...linkProps } = props;
    return (
      <ActionLinkBase to={to || ''} {...linkProps}>
        {children}
      </ActionLinkBase>
    );
  } else {
    const { type, children, ...buttonProps } = props;
    return (
      <ActionBtnBase type={type} {...buttonProps}>
        {children}
      </ActionBtnBase>
    );
  }
};
