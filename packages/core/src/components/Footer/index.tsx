import styled from '@emotion/styled';
import React from 'react';
import { Color } from '../../common';

const Footer = styled.footer({
  backgroundColor: Color.BackgroundColor,
});

const Component = () => {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA ?? '<development>';
  const gitCommitUrl = `https://github.com/arjohnston/puch-app/commit/${commitHash}`;

  return (
    <Footer>
      <a href={gitCommitUrl} target='_blank' rel='noreferrer noopener'>
        {commitHash}
      </a>
    </Footer>
  );
};

export default Component;
