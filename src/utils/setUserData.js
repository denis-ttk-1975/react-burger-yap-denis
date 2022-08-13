export function setUserData(name, email, password) {
  localStorage.setItem('user_name', name);
  localStorage.setItem('user_email', email);
  localStorage.setItem('user_password', password);
}
