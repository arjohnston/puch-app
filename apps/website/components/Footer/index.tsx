import styled from '@emotion/styled';
import * as Core from '@puch-app/core';
import React from 'react';

const StyledFooter = styled.footer({
  backgroundColor: Core.Color.Background.Primary,
  paddingLeft: Core.Unit.MD,
  paddingRight: Core.Unit.MD,
  paddingBottom: Core.Unit.SM,
  paddingTop: Core.Unit.SM,
});

const StyledLink = styled.a({
  color: Core.Color.Link.Primary,
  fontSize: '0.75rem', // TODO: This should come from @core
});

const Footer: React.FunctionComponent = () => {
  const commitHash = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? undefined;
  const gitCommitUrl = commitHash
    ? `https://github.com/arjohnston/puch-app/commit/${commitHash}`
    : 'https://github.com/arjohnston/puch-app';

  return (
    <StyledFooter>
      <StyledLink href={gitCommitUrl} target='_blank' rel='noreferrer noopener'>
        {commitHash}
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
