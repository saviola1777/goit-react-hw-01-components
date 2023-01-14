import css from 'components/FriendList/FriendList.module.css'
import PropTypes from 'prop-types';
export function FriendListItems({ avatar, name, isOnline, id }) { 
  return (
    <li className={css.item} key={id}>
  <span className={isOnline?css.online:css.offline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
       </li >
)}

FriendListItems.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired
})),
    
};


