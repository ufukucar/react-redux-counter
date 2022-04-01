export const toDisplayDateFormat = (dateString) => {
  let date = new Date(dateString)

  return `  ${date.toLocaleDateString('tr-TR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })}`
}
