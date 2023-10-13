import { GenericInterface } from "@/types";

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

export function getColorClassFromCode(a: string, code: string) {
  return `${a}-[${code}]`;
}

export function addLabelToObject(item: GenericInterface) {
  return {
    ...item,
    value: item._id,
    label: item.name,
  };
}

export function getCookie(name: string) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
