import React from 'react';

import { ActionBtnStyled } from './ActionBtn.styled';

interface ActionBtnProps {
  children: string;
}

export const ActionBtn = ({ children }: ActionBtnProps) => {
  return (
    <>
      <ActionBtnStyled isLink to="/">
        {children}
      </ActionBtnStyled>
      <ActionBtnStyled isLink={false} type="submit">
        {children}
      </ActionBtnStyled>
    </>
  );
};
