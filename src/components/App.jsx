import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import { data,  user, friends ,transactions} from '../data/all'


export default function App() {
  return (
    <div>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
  <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;

    </div>
  );
};

// У найпростішій формі компонент – це JavaScript-функція з дуже простим контрактом: функція отримує об'єкт властивостей, який називається props і повертає дерево React-елементів.
// import { user , data } from '../data/all' це імпорт наших обєкиів , user тобто обект даних для нашого профілю
// export default function App() цю функцію ми будемо експортувати в indedex.js тут ми повертаємо наші пропси наприклад <Profile>
// в цю функцію ми повертаємо наші пропси <Profile> де всередині ми пишемо в профайлі ми називаи пропси {username, tag, location, avatar, stats}
// а тепер ми маємо передати наші дані пропсам тобто username={user.username} , tag={user.tag}
// тобто в цю функцію ми рендеримо розмітку  <Profile> це компонент а ньому пропси такі як {username, tag, location} тобто це дані в які ми будемо передавти обєкти ,тепер  (username)--це пропс який ми назвали в Profile буде дорівнювати {user.username} де user це наш обєкт який ми імпортували