import React from 'react';

const Header = () => {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA ?? '<development>';

  return (
    <footer>
      <a
        href={`https://github.com/arjohnston/puch-app/commit/${commitHash}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        {commitHash}
      </a>
    </footer>
  );
};

export default Header;
