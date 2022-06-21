import { GenreResponseProps } from "../@types/content";

export interface SidebarProps {
    selectedGenreId: number;
    handleClickButton(id: number): void;
  }