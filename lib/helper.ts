export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function getCreateFormLink(label: string) {
  return `/dashboard/${label.toLowerCase()}/create`;
}
export function getEditFormLink(label: string, id: string) {
  return `/dashboard/${label.toLowerCase()}/${id}`;
}
