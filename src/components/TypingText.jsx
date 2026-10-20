import { useEffect, useState } from "react";

export default function TypingText({
  words = [],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];

    // Decide next action
    const isFullWord = text === currentWord;
    const isEmpty = text === "";

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (isFullWord && !isDeleting) delay = pause; // pause before deleting
    if (isEmpty && isDeleting) delay = 300;       // pause before next word

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (isFullWord) {
          setIsDeleting(true);
        } else {
          setText(currentWord.slice(0, text.length + 1));
        }
      } else {
        // deleting
        if (isEmpty) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setText(currentWord.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typing-text">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
}