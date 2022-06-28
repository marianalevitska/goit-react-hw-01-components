import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <div className={styles.friends_block} >
            <ul className={styles.friends_list}>
                {friends.map(({ avatar, name, isOnline, id }) => {

                    return (
                        <FriendListItem
                            avatar={avatar}
                            friendName={name}
                            isOnline={isOnline}
                            key={id}
                        />

                    );
                })}
            </ul>
        </div >
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}
export default FriendList;

