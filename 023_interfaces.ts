interface User {
  email: string;
  firstName: string;
  lastName: string;
}

function profile(user: User): string {
  return `Welcome, ${user.firstName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Jason',
  lastName: 'Dudley'
};

console.log(profile(realUser));