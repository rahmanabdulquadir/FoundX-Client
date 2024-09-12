import React, { ReactNode } from 'react';

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      Inside admin layout
      {children}
    </div>
  );
};

export default layout;