import { AddIcon, ActionLinkStyled, ActionBtnStyled, DescriptionStyled } from './ActionBtn.styled';

interface ActionBtnProps {
  isLink?: boolean;
  description?: string;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ActionBtn = ({ isLink, description, to, type, onClick, ...props }: ActionBtnProps) => {
  if (isLink) {
    return (
      <ActionLinkStyled to={to || ''} {...props}>
        <AddIcon />
        <DescriptionStyled>{description}</DescriptionStyled>
      </ActionLinkStyled>
    );
  } else {
    return (
      <ActionBtnStyled type={type} onClick={onClick} {...props}>
        {description}
      </ActionBtnStyled>
    );
  }
};
