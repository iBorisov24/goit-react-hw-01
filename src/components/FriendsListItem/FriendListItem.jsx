import clsx from 'clsx';
import css from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<div className={clsx(css['friend-list-item'])}>
			<img src={avatar} alt="Avatar" width="48" />
			<p>{name}</p>
			<p className={clsx(isOnline ? css['online'] : css['offline'])}>
				{isOnline ? 'online' : 'offline'}
			</p>
		</div>
	);
};
export default FriendListItem;
