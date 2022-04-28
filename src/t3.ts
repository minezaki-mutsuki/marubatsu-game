export const judgeBoard = (board: readonly (string | null)[]): string | null => {
  const JUDGE_BOARD_PRESET = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return ['O', 'X'].find(p => JUDGE_BOARD_PRESET.some(ns => ns.every(b => board[b] === p))) ?? null;
};
