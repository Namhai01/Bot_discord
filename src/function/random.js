function random(data) {
  if (!data || data.length === 0) return;
  const result = data[Math.floor(Math.random() * data.length)];
  return result;
}
module.exports = random;