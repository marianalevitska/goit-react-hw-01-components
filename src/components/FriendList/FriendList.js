import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ buddies }) => {
    return (
        <div className={styles.friends_block} >
            <ul className={styles.friends_list}>
                {buddies.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendListItem
                            key={id}
                            friendName={name}
                            avatar={avatar}
                            isOnline={isOnline}
                        />

                    );
                })}
            </ul>
        </div >
    );
};

FriendList.propTypes = {
    buddies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}
export default FriendList;