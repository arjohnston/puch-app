import styled from '@emotion/styled';
import React from 'react';
import { Background } from '../../common/Color/Background';

const StyledFooter = styled.footer({
  backgroundColor: Background.White,
});

const Footer: React.FunctionComponent = () => {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA ?? '<development>';
  const gitCommitUrl = `https://github.com/arjohnston/puch-app/commit/${commitHash}`;

  return (
    <StyledFooter>
      <a href={gitCommitUrl} target='_blank' rel='noreferrer noopener'>
        {commitHash}
      </a>
    </StyledFooter>
  );
};

export default Footer;
