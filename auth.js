document.addEventListener('DOMContentLoaded', (event) => {
  const dummyData = {
      email: 'test@example.com',
      password: 'password123'
  };

  function validateLogin() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email === dummyData.email && password === dummyData.password) {
          localStorage.setItem('LOGGED_IN', 'YES');
          alert('Login successful!');
          window.location.href = './index.html';
      } else {
          alert('Invalid email or password. Please try again.');
      }
  }

  function checkLoginStatus() {
      const isLoggedIn = localStorage.getItem('LOGGED_IN');
      const loginLinks = document.querySelectorAll('.login-link');
      const logoutLink = document.querySelector('.logout-link');

      if (isLoggedIn === 'YES') {
          loginLinks.forEach(link => link.style.display = 'none');
          if (logoutLink) {
              logoutLink.style.display = 'block';
          }
      } else {
          loginLinks.forEach(link => link.style.display = 'block');
          if (logoutLink) {
              logoutLink.style.display = 'none';
          }
      }
  }

  function logout() {
      console.log('logged out');
      localStorage.removeItem('LOGGED_IN');
      const loginLinks = document.querySelectorAll('.login-link');
      const logoutLink = document.querySelector('.logout-link');

      loginLinks.forEach(link => link.style.display = 'block');
      if (logoutLink) {
          logoutLink.style.display = 'none';
      }
  }

  // Attach the validateLogin and logout functions to the global scope
  window.validateLogin = validateLogin;
  window.logout = logout;

  // Check login status on page load
  checkLoginStatus();
});
