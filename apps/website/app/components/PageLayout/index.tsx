import * as Core from '@puch-app/core';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<Props> = ({ children }: Props) => (
  <Core.FlexRowLayout fullHeight>
    <Core.Sidebar />
    <Core.FlexColumnLayout fullWidth>
      <Core.Header />
      <Core.FlexRowLayout>{children}</Core.FlexRowLayout>
      <Core.Footer />
    </Core.FlexColumnLayout>
  </Core.FlexRowLayout>
);

export default PageLayout;
