export const formatISODate = (isoDate, showDayOfWeek = false) => {
  const iso = isoDate

  let [y, m, d, hh, mm, ss, ms] = iso.match(/\d+/g)
  let date = new Date(Date.UTC(y, m - 1, d, hh, mm, ss, ms))
  const day = date.toLocaleString('default', { day: '2-digit' })
  const month = date.toLocaleString('default', { month: 'short' })
  const year = date.toLocaleString('default', { year: 'numeric' })
  const hour = date
    .toLocaleTimeString([], {
      hour: 'numeric',
    })
    .replace(' AM', 'am')
    .replace(' PM', 'pm')

  let formatted
  if (!showDayOfWeek) {
    formatted = `${day} ${month} ${year}, ${hour}`
  } else {
    const dayOfWeek = date.toLocaleString('default', { weekday: 'short' })
    formatted = `${dayOfWeek}, ${day} ${month} ${year}`
  }

  return formatted
}
