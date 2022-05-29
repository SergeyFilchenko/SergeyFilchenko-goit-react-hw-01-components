import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import Profile from './components/profile/profile';
import Statistics from 'components/statistics/statistics';

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
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}
