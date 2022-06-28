import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, friendName, isOnline }) => {
    return (
        <div className={styles.friend__item}>
            <li className={styles.item}>
                <p className={isOnline ? styles.active : styles.none}>
                    <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span></p>
                <img className={styles.avater} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{friendName}</p>
            </li>
        </div>
    );
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}
export default FriendListItem;