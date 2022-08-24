export function signIn(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
          name: 'Lucas',
          email: email,
          password: password,
          auth: true,
        });
      }, 2000);
    });
}