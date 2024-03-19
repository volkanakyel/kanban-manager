import { Board } from '@/types/task';
import data from '@/data/boards.json';
export function getBoards(): Promise<Board[]> {
  return new Promise<Board[]>(resolve => {
    setTimeout(() => {
      return resolve(data.boards as Board[]);
    }, 1000);
  });
}