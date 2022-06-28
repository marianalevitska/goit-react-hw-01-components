import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import classNames from 'classnames';
export const FriendListItem = ({ avatar, friendName, isOnline }) => {
    return (
        <div className={styles.friend__item}>
            <li className={styles.item}>
                <p className={classNames(styles.active, { [styles.no_active]: isOnline })}>
                    <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span></p>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{friendName}</p>
            </li>
        </div >
    );
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem;

