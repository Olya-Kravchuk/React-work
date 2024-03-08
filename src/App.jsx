import './App.css';
import MailBox from './components/MailBox';
import mistExpressUsers from './mistExpressUsers.json';
import nowaPostUsers from './nowaPostUsers.json';
import ukrpostUsers from './ukrpostUsers.json';

function App() {
  return (
    <div>
      <MailBox
        users={mistExpressUsers}
        boxTitle="Meest Express"
        mailBoxCount={5}
      />
      <MailBox users={nowaPostUsers} boxTitle="Nowa Post" mailBoxCount={3} />
      <MailBox users={ukrpostUsers} boxTitle="Ukr Post" />
    </div>
  );
}

export default App;
