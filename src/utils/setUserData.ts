export function setUserData(name: string, email: string) {
  localStorage.setItem('user_name', name);
  localStorage.setItem('user_email', email);
}
