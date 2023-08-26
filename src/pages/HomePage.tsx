import { PageTitle } from 'components/PageTitle/PageTitle';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';
import { BaseBox } from 'components/Box/Box';
import { Filter } from 'components/Filter/Filter';
import { Sorter } from 'components/Sorter/Sorter';

const HomePage = () => {
  return (
    <BaseBox display="flex" alignItems="center">
      <PageTitle title="My events" />
      <Filter />
      <Sorter />
      <ActionBtn description="Add new event" isLink to="createEvent" />
    </BaseBox>
  );
};

export default HomePage;
