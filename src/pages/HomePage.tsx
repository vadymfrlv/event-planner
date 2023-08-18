import React from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';

const HomePage = () => {
  return (
    <>
      <PageTitle title="My events" />
      <ActionBtn children="something" />
    </>
  );
};

export default HomePage;
