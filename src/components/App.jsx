import { ProfileCard } from './Profile/Profile';
import user from './Profile/user';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';



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
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />.
    </div>
  );
};
