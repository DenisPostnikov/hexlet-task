const formattedTime = (n) => {
  const hours = Math.floor(n / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;
  
  const minutes = n % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
}

console.log(formattedTime(5)); // 00:05
console.log(formattedTime(67)); // 01:07
console.log(formattedTime(175)); // 02:55