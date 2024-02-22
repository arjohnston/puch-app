import styled from '@emotion/styled';
import React from 'react';
import { Color, Text, Unit } from '../../common';

const StyledFooter = styled.footer({
  backgroundColor: Color.Background.Secondary,
  paddingLeft: Unit.MD,
  paddingRight: Unit.MD,
  paddingBottom: Unit.SM,
  paddingTop: Unit.SM,
});

const StyledLink = styled.a({
  color: Color.Link.Primary,
  fontSize: Text.Size.Small,
});

const Footer: React.FunctionComponent = () => {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA ?? '<development>';
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
