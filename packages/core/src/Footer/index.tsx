import React from 'react';

const Header = () => {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA ?? '<development>';

  return <footer>{commitHash}</footer>;
};

export default Header;
