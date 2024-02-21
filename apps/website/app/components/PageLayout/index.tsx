import * as Core from '@puch-app/core';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<Props> = ({ children }: Props) => (
  <>
    <Core.Sidebar />
    <Core.Header />
    <Core.Body>{children}</Core.Body>
    <Core.Footer />
  </>
);

export default PageLayout;
