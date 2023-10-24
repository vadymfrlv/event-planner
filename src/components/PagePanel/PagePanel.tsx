import { PageTitle } from 'components/PageTitle/PageTitle';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';
import { Filter } from 'components/Filter/Filter';
import { Sorter } from 'components/Sorter/Sorter';

import { PagePanelWrapper, PagePanelBtnsWrapper } from './PagePanel.styled';

export const PagePanel = () => {
  return (
    <PagePanelWrapper>
      <PagePanelBtnsWrapper>
        <Filter />
        <Sorter />
        <ActionBtn description="Add new event" isLink to="create-event" />
      </PagePanelBtnsWrapper>
      <PageTitle title="My events" />
    </PagePanelWrapper>
  );
};
