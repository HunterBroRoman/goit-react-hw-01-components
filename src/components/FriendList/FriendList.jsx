import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export const FriendList = props => {
    const { friends } = props;
    return (
      <ul className={styles.friend_list}>
        {friends.map(elem => (
          <FriendListItem elem={elem} key={elem.id} />
        ))}
      </ul>
    );
  };
  
  const FriendListItem = props => {
    const { isOnline, avatar, name, id } = props.elem;
    return (
      <li className={styles.item} key={id}>
        <span className={isOnline ? styles.status_on : styles.status_of}></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };