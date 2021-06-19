import React from 'react';

const ProfileIcon = props => {
  return (
    <svg className='svg-profile' data-testid="icon-user" viewBox="0 0 512 512" role="img" aria-label="User icon" focusable="false"><path d="M461 408c-12-42-49-130-140-158 40-28 57-79 42-125-15-47-58-78-106-78-49 0-92 31-107 78-15 46 2 97 42 125C89 277 59 369 51 413c-2 12 1 25 10 35 8 10 20 16 33 17h324c14 0 27-6 36-17s11-26 7-40zM176 159c-1-34 19-63 50-76 30-13 66-6 89 18 23 23 30 58 18 89-13 30-43 50-76 50-45 0-81-37-81-81zm254 270c-3 4-7 6-12 6H95c-5 0-9-2-11-5-3-4-4-8-3-12 10-55 47-148 176-148 115 0 159 92 175 147 1 4 0 8-2 12z"></path></svg>
  );
};

export default ProfileIcon;
