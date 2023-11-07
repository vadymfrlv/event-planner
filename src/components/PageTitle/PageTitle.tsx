import { PageTitleStyled } from './PageTitle.styled';

interface PageTitleProps {
  title: string;
  isForHomePage?: boolean;
}

export const PageTitle = ({ title, isForHomePage }: PageTitleProps) => {
  return <PageTitleStyled $isHomePage={isForHomePage}>{title}</PageTitleStyled>;
};
