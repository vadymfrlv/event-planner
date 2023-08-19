import { AddIcon, ActionLinkStyled, ActionBtnStyled, DescriptionStyled } from './ActionBtn.styled';

interface ActionBtnProps {
  isLink: boolean;
  description?: string;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
}

export const ActionBtn = ({ isLink, description, to, type, ...props }: ActionBtnProps) => {
  if (isLink) {
    return (
      <ActionLinkStyled to={to || ''} {...props}>
        <AddIcon />
        <DescriptionStyled>{description}</DescriptionStyled>
      </ActionLinkStyled>
    );
  } else {
    return (
      <ActionBtnStyled type={type} {...props}>
        {description}
      </ActionBtnStyled>
    );
  }
};
