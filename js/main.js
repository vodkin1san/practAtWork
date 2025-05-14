import { createKeyboard } from "./keyboard.js";
import { initializeInput, handleGlobalKeyDown, handleGlobalKeyUp, currentLang } from "./inputHandlers.js";
import { updateKeyboardLabels } from "./utils.js";

const BACKSPACE = "Backspace";
const SHIFT = "Shift";
const TAB = "Tab";
const ENTER = "Enter";
const ARROWRIGHT = "ArrowRight";
const ARROWLEFT = "ArrowLeft";
const CAPSLOCK = "CapsLock";
const SPACE = "Space";
const ONE = "1";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const input = initializeInput(container);

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard");
  container.appendChild(keyboardContainer);

  const keyboardLayout = [
    [
      { code: "Backquote", ru: "ё", en: "`" },
      { code: "Digit1", ru: "1", en: "1" },
      { code: "Digit2", ru: "2", en: "2" },
      { code: "Digit3", ru: "3", en: "3" },
      { code: "Digit4", ru: "4", en: "4" },
      { code: "Digit5", ru: "5", en: "5" },
      { code: "Digit6", ru: "6", en: "6" },
      { code: "Digit7", ru: "7", en: "7" },
      { code: "Digit8", ru: "8", en: "8" },
      { code: "Digit9", ru: "9", en: "9" },
      { code: "Digit0", ru: "0", en: "0" },
      { code: "Minus", ru: "-", en: "-" },
      { code: "Equal", ru: "=", en: "=" },
      { code: "Backspace", label: "←" },
    ],
    [
      { code: "Tab", label: "Tab" },
      { code: "KeyQ", ru: "й", en: "q" },
      { code: "KeyW", ru: "ц", en: "w" },
      { code: "KeyE", ru: "у", en: "e" },
      { code: "KeyR", ru: "к", en: "r" },
      { code: "KeyT", ru: "е", en: "t" },
      { code: "KeyY", ru: "н", en: "y" },
      { code: "KeyU", ru: "г", en: "u" },
      { code: "KeyI", ru: "ш", en: "i" },
      { code: "KeyO", ru: "щ", en: "o" },
      { code: "KeyP", ru: "з", en: "p" },
      { code: "BracketLeft", ru: "х", en: "[" },
      { code: "BracketRight", ru: "ъ", en: "]" },
      { code: "Backslash", ru: "\\", en: "\\" },
    ],
    [
      { code: "CapsLock", label: "CapsLock" },
      { code: "KeyA", ru: "ф", en: "a" },
      { code: "KeyS", ru: "ы", en: "s" },
      { code: "KeyD", ru: "в", en: "d" },
      { code: "KeyF", ru: "а", en: "f" },
      { code: "KeyG", ru: "п", en: "g" },
      { code: "KeyH", ru: "р", en: "h" },
      { code: "KeyJ", ru: "о", en: "j" },
      { code: "KeyK", ru: "л", en: "k" },
      { code: "KeyL", ru: "д", en: "l" },
      { code: "Semicolon", ru: "ж", en: ";" },
      { code: "Quote", ru: "э", en: "'" },
      { code: "Enter", label: "Enter" },
    ],
    [
      { code: "ShiftLeft", label: "Shift" },
      { code: "KeyZ", ru: "я", en: "z" },
      { code: "KeyX", ru: "ч", en: "x" },
      { code: "KeyC", ru: "с", en: "c" },
      { code: "KeyV", ru: "м", en: "v" },
      { code: "KeyB", ru: "и", en: "b" },
      { code: "KeyN", ru: "т", en: "n" },
      { code: "KeyM", ru: "ь", en: "m" },
      { code: "Comma", ru: "б", en: "," },
      { code: "Period", ru: "ю", en: "." },
      { code: "Slash", ru: ".", en: "/" },
      { code: "ShiftRight", label: "Shift" },
    ],
    [
      { code: "ControlLeft", label: "Ctrl" },
      { code: "MetaLeft", label: "Win" },
      { code: "AltLeft", label: "Alt" },
      { code: "Space", label: " " },
      { code: "AltRight", label: "Alt" },
      { code: "ControlRight", label: "Ctrl" },
    ],
  ];

  createKeyboard(keyboardContainer, keyboardLayout, input);
  updateKeyboardLabels(currentLang);

  // Обработка глобальных событий
  document.addEventListener("keydown", (e) => handleGlobalKeyDown(e, input));
  document.addEventListener("keyup", (e) => handleGlobalKeyUp(e));
});
