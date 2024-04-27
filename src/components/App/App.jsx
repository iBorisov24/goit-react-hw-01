import { useState } from 'react';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import userData from '../Profile/userData.json';
import friends from '../Friends/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';

const App = () => {
	return (
		<>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<Friends friends={friends} />

			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
