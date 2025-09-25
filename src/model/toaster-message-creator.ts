let id = 0;
export const MESSAGES = [
  `Importing ${'CDR_Mediations_5104983729576938238_10119293477859'}`,
  `The dashboard was moved successfully to ${'Incidents'}`,
  `The folder was moved to ${'Incidents'}`,
  'Reticulating splines...',
  'Breakfast is served.',
  'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.',
  'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
  'It was a bright cold day in April, and the clocks were striking thirteen.',
  "Ships at a distance have every man's wish on board",
];

export interface ToastMessageProps {
  id: string;
  message: string;
}

export function makeToast(): ToastMessageProps {
  return { id: (++id).toString(), message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)] };
}
