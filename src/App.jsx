import user from './components/profile/user.json';
import Profile from './components/profile/profile';

export default function App (){
return(
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);
}
