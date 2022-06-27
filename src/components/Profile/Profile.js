import style from './Profile.module.css';
import Props from 'prop-types';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes } }) => {
    return (
        <div class={style.pr_block}>
            <div class={style.profile}>
                <div class={style.description}>
                    <img
                        src={avatar}
                        alt={username}
                        class={style.avatar}
                    />
                    <p class={style.name}>{username}</p>
                    <p class={style.tag}>{tag}</p>
                    <p class={style.location}>{location}</p>
                </div>

                <ul class={style.stats}>
                    <li>
                        <span class={style.label}>Followers</span>
                        <span class={style.quantity}>{followers}</span>
                    </li>
                    <li>
                        <span class={style.label}>Views</span>
                        <span class={style.quantity}>{views}</span>
                    </li>
                    <li>
                        <span class={style.label}>Likes</span>
                        <span class={style.quantity}>{likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
Profile.propTypes = {
    username: Props.string.isRequired,
    avatar: Props.string.isRequired,
    location: Props.string.isRequired,
    tag: Props.string.isRequired,
    stats: Props.shape({
        followers: Props.number.isRequired,
        likes: Props.number.isRequired,
        views: Props.number.isRequired,
    }),

};

