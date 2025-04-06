function toTime(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    throw new Error("Seconds must be greater than 0");
  }
  // Comment (yes)
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return [
    h ? `${h} hour${h !== 1 ? 's' : ''}` : '',
    m ? `${m} minute${m !== 1 ? 's' : ''}` : '',
    s ? `${s} second${s !== 1 ? 's' : ''}` : ''
  ].filter(Boolean).join(', ');
}

module.exports = toTime;
