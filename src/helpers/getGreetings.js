export default function getGreeting() {
  const HOURS = new Date().getHours();

  if (HOURS >= 6 && HOURS <= 12) {
    return '¡Buenos Días!';
  }

  if (HOURS >= 13 && HOURS <= 19) {
    return '¡Buenas Tardes!';
  }

  return '¡Buenas Noches!';
}
