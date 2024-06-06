import {auth, dataBase} from '../api/firebase';

function Sidebar() {
   const displayName = auth?.displayName || "None provided" //if no name no error will be shown

  return (
    <div className='sidebar-container'>
        <header>
          <p>{displayName}</p>
        </header>
    </div>
  );
}