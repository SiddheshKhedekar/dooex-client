/**
 * Escape string for use in regular expression.
 */
function escape(pattern: string): string {
  const alphanum = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';

  const s = pattern.split('');

  for (let i = 0; i < pattern.length; i += 1) {
    const c = pattern[i];

    if (!alphanum.includes(c)) {
      if (c == '\u0000') {
        s[i] = '\\000';
      } else {
        s[i] = `\\${c}`;
      }
    }
  }

  return s.join('');
}

export default escape;
