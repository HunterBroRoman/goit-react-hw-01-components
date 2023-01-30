import { ProfileCard } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        color: '#010101',
      }}
    >
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
  </div>
  );
};
