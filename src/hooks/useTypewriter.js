import { useEffect, useState } from 'react';

// `words` must be a stable array (define it outside the component).
export default function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer;

    const step = () => {
      const word = words[i];
      if (!deleting) {
        j += 1;
        setText(word.slice(0, j));
        if (j === word.length) {
          deleting = true;
          timer = setTimeout(step, hold);
          return;
        }
        timer = setTimeout(step, type);
      } else {
        j -= 1;
        setText(word.slice(0, j));
        if (j === 0) {
          deleting = false;
          i = (i + 1) % words.length;
          timer = setTimeout(step, 300);
          return;
        }
        timer = setTimeout(step, erase);
      }
    };

    setText('');
    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);

  return text;
}
