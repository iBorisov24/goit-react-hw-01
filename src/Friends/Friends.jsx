import FriendListItem from '../FriendsListItem/FriendListItem';
const Friends = ({ friends }) => {
	return (
		<ul>
			{friends.map(friend => (
				<li key={friend.id}>
					<FriendListItem
						avatar={friend.avatar}
						name={friend.name}
						isOnline={friend.isOnline}
					/>
				</li>
			))}
		</ul>
	);
};
export default Friends;
