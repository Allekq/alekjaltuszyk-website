/** Real app captures, copied from the app owner's English release materials. */
export interface CodeWorkroomMedia {
  heroVideo?: { src: string; poster: string; caption: string; transcript: string };
  screenshots: readonly { src: string; alt: string; caption: string; width: number; height: number; device: "iPad" | "iPhone" }[];
}
const media = "/media/apps/code-workroom-ide";
export const codeWorkroomMedia: CodeWorkroomMedia = {
  heroVideo: {
    src: `${media}/header-video.mp4`,
    poster: `${media}/header-poster.jpg`,
    caption: "Watch the workspace in action. Silent app footage; press Play to begin.",
    transcript: "A Python project is open on iPad. The program adds daily practice times of 25, 40, 35, 50 and 30 minutes, producing a total of 180 and an average of 36. The Python debugger pauses at a source line and shows the call stack and local values. The final scene opens a Shell Essentials exercise, with its instructions beside the starter source. The footage demonstrates local execution, inspection and learning in the app.",
  },
  screenshots: [
    { src: `${media}/ipad-13/02-python-debugger.png`, device: "iPad", width: 2732, height: 2048, caption: "Follow Python one step at a time.", alt: "Python debugger paused at line 9, with the call stack and local total 180 and average 36 visible." },
    { src: `${media}/ipad-13/03-learn-by-doing.png`, device: "iPad", width: 2732, height: 2048, caption: "Keep the exercise beside your code.", alt: "Shell Essentials exercise instructions beside an editable starter solution and the Check Exercise action." },
    { src: `${media}/ipad-13/04-project-terminal.png`, device: "iPad", width: 2732, height: 2048, caption: "Run scripts in the project terminal.", alt: "Project terminal running python explore.py and displaying 180 total minutes and a 36-minute daily average." },
    { src: `${media}/ipad-13/06-original-readings.png`, device: "iPad", width: 2732, height: 2048, caption: "Read the idea. Try it in code.", alt: "Original Arguments and Files chapter explaining shell arguments, quoting, overwrite and append." },
    { src: `${media}/iphone-large/01-code-anywhere.png`, device: "iPhone", width: 1284, height: 2778, caption: "A compact workspace for iPhone.", alt: "Python source open in the iPhone editor above the touch coding keyboard." },
    { src: `${media}/iphone-large/03-learn-anywhere.png`, device: "iPhone", width: 1284, height: 2778, caption: "Bring your practice with you.", alt: "iPhone Learn library showing free Algorithmic Thinking, Code Foundations, and Lists and Searching subjects." },
  ],
};
