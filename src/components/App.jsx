import React from 'react';
import userData from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import history from './data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { FriendList, FriendListItem } from './Friendlist/FriendList';
import TransactionHistory from './TransactionHistory/TransationHistory';

export const App = () => {
  return (
    <>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendList>
      <TransactionHistory items={history} />
    </>
  );
};
