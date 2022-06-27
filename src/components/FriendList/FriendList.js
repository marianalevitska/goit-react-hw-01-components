import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './components/FriendListItem/FriendListItem';

export const FriendList = ({ buddies }) => {
    return (
        <div className={styles.friends_block} >
            <ul className={styles.friends_list}>
                {buddies.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendListItem
                            key={id}
                            frirendName={name}
                            avatar={avatar}
                        />
                    );
                })}
            </ul>
        </div >
    );
};

FriendList.PropTypes = {
    buddies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}
export default FriendList;