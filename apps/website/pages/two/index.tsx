import * as Core from '@puch-app/core';
import { ReactElement } from 'react';
import PageLayout from '../../components/PageLayout';
import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  return (
    <Core.Text.Body color={Core.Color.White} size='large'>
      Hello World Two
    </Core.Text.Body>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Page;
