import './App.css';
import MailBox from './components/MailBox';

const mistExpressUsers = [
  { id: 1, userEmail: 'max@example.com' },
  { id: 2, userEmail: 'user@example.com' },
  { id: 3, userEmail: 'coni@example.com' },
];
const nowaPostUsers = [
  { id: 4, userEmail: 'lili@example.com' },
  { id: 5, userEmail: 'pit@example.com' },
  { id: 6, userEmail: 'codi@example.com' },
];
const ukrpostUsers = [
  { id: 7, userEmail: 'mconar@example.com' },
  { id: 8, userEmail: 'kirc@example.com' },
  { id: 9, userEmail: 'mila@example.com' },
];

function App() {
  return (
    <div>
      <MailBox
        boxUsers={mistExpressUsers}
        boxTitle="Meest Express"
        mailBoxCount={5}
      />
      <MailBox boxUsers={nowaPostUsers} boxTitle="Nowa Post" mailBoxCount={3} />
      <MailBox boxUsers={ukrpostUsers} boxTitle="Ukr Post" />
    </div>
  );
}

export default App;
