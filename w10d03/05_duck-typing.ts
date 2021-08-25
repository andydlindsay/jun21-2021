interface IPotentialUser {
  username: string;
  password: string;
}

const login = (potentialUser: IPotentialUser): boolean => {
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  friends: []
};

login(myUser);

const myName = 'Andy';

