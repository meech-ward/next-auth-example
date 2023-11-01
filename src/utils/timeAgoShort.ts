export default function timeAgoShort(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 364)

  return years
    ? `${years}y`
    : days
    ? `${days}d`
    : hours
    ? `${hours}h`
    : minutes
    ? `${minutes}m`
    : `${seconds}s`
}