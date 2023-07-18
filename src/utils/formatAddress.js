// truncate string with ellipsis
export const truncate = (str) => {
  return str.substring(0, 7) + "..." + str.substring(str.length - 7, str.length)
}
