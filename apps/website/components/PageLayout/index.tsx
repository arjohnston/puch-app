import * as Core from '@puch-app/core';
import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  canonical?: string;
}

const PageLayout: React.FunctionComponent<Props> = ({
  children,
  pageTitle,
  pageDescription,
  canonical,
}: Props) => (
  <>
    <Head
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      canonical={canonical}
    />
    <Core.FlexRowLayout fullHeight>
      <Sidebar />
      <Core.FlexColumnLayout fullWidth>
        <Header />
        <Core.FlexRowLayout
          justifyContent={Core.Layout.JustifyContent.Center}
          alignItems={Core.Layout.AlignItems.Center}
          backgroundColor={Core.Color.Background.Primary}
        >
          {children}
        </Core.FlexRowLayout>
        <Footer />
      </Core.FlexColumnLayout>
    </Core.FlexRowLayout>
  </>
);

export default PageLayout;
