import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css'
import { FriendListItems } from 'components/FriendList/FrienListItems'
export function FriendList({ friends }) { 
  return (
    <ul className={css.friendList}>{FriendListItems(friends)}</ul>
  )
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired
})),
    
};