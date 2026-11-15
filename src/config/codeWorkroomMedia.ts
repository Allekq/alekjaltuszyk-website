/** Real release captures only. Empty slots render no player or gallery. */
export interface CodeWorkroomMedia {
  heroVideo?: { src: string; poster: string; caption: string; transcript: string };
  screenshots: readonly { src: string; alt: string; caption: string; width: number; height: number }[];
}
export const codeWorkroomMedia: CodeWorkroomMedia = {
  screenshots: [],
};
