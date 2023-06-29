import { Navbar, Dropdown} from 'flowbite-react';
import { useHistory } from 'react-router-dom';

const SignOutButton = () => {
  const history = useHistory();

  const handleSignOut = () => {
    history.push('/');
  };

  return (
    <>
      <Navbar>
        <Dropdown>
          <Dropdown.Item>
            <button onClick={handleSignOut}>Signout</button>
          </Dropdown.Item>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default SignOutButton;