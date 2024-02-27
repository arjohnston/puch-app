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
  console.log({
    VERCEL: process.env.NEXT_PUBLIC_VERCEL,
    CI: process.env.NEXT_PUBLIC_CI,
    VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
    VERCEL_REGION: process.env.NEXT_PUBLIC_VERCEL_REGION,
    VERCEL_AUTOMATION_BYPASS_SECRET:
      process.env.NEXT_PUBLIC_VERCEL_AUTOMATION_BYPASS_SECRET,
    VERCEL_GIT_PROVIDER: process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER,
    VERCEL_GIT_REPO_SLUG: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG,
    VERCEL_GIT_REPO_OWNER: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER,
    VERCEL_GIT_REPO_ID: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_ID,
    VERCEL_GIT_COMMIT_REF: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
    VERCEL_GIT_COMMIT_SHA: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    VERCEL_GIT_COMMIT_MESSAGE:
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE,
    VERCEL_GIT_COMMIT_AUTHOR_LOGIN:
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN,
    VERCEL_GIT_COMMIT_AUTHOR_NAME:
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME,
    VERCEL_GIT_PREVIOUS_SHA: process.env.NEXT_PUBLIC_VERCEL_GIT_PREVIOUS_SHA,
    VERCEL_GIT_PULL_REQUEST_ID:
      process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID,
  });
  const commitHash =
    process.env.VERCEL_GIT_COMMIT_SHA ??
    'https://github.com/arjohnston/puch-app';
  const gitCommitUrl = `https://github.com/arjohnston/puch-app/commit/${commitHash}`;

  return (
    <StyledFooter>
      <StyledLink href={gitCommitUrl} target='_blank' rel='noreferrer noopener'>
        {commitHash}
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
