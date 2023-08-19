import { PageTitle } from 'components/PageTitle/PageTitle';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';
import { BaseBox } from 'components/Box/Box';

const HomePage = () => {
  return (
    <>
      <BaseBox display="flex" justifyContent="space-between" alignItems="center">
        <PageTitle title="My events" />
        <ActionBtn description="Add new event" isLink to="/" />
      </BaseBox>
      {/* <ActionBtn description="Submit" isLink={false} type="submit" /> */}
    </>
  );
};

export default HomePage;
