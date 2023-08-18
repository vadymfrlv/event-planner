import { PageTitleStyled } from './PageTitle.styled';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <PageTitleStyled>{title}</PageTitleStyled>;
};
