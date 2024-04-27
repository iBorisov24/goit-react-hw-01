import clsx from 'clsx';
import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
	return (
		<div className={clsx(css['profile-container'])}>
			<div className={clsx(css['profile-item'])}>
				<img
					className={css['profile-item-img']}
					src={image}
					alt="User avatar"
					width={50}
					height={50}
				/>
				<p>{name}</p>
				<p>@{tag}</p>
				<p>{location}</p>
			</div>

			<ul className={clsx(css['profile-stats'])}>
				<li className={clsx(css['profile-stats-item'])}>
					<span>Followers</span>
					<span>{stats.followers}</span>
				</li>
				<li className={clsx(css['profile-stats-item'])}>
					<span>Views</span>
					<span>{stats.views}</span>
				</li>
				<li className={clsx(css['profile-stats-item'])}>
					<span>Likes</span>
					<span>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};
export default Profile;
