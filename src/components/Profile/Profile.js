import style from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes } }) => {
    return (
        <div className={style.pr_block}>
            <div className={style.profile}>
                <div className={style.description}>
                    <img
                        src={avatar}
                        alt={username}
                        className={style.avatar}
                    />
                    <p className={style.name}>{username}</p>
                    <p className={style.tag}>{tag}</p>
                    <p className={style.location}>{location}</p>
                </div>

                <ul className={style.stats}>
                    <li className={style.stats_item}>
                        <span className={style.label}>Followers</span>
                        <span className="quantity">{followers}</span>
                    </li>
                    <li className={style.stats_item}>
                        <span className={style.label}>Views</span>
                        <span className="quantity">{views}</span>
                    </li>
                    <li className={style.stats_item}>
                        <span className={style.label}>Likes</span>
                        <span className="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    }),

}

export default Profile;
