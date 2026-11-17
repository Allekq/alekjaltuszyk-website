/** Real app captures, copied from the app owner's English release materials. */
export interface CodeWorkroomMedia {
  screenshots: readonly { src: string; alt: string; caption: string; width: number; height: number; device: "iPad" | "iPhone" }[];
}
const media = "/media/apps/code-workroom-ide";
export const codeWorkroomMedia: CodeWorkroomMedia = {
  screenshots: [
    { src: `${media}/ipad-13/02-python-debugger.png`, device: "iPad", width: 2732, height: 2048, caption: "Follow Python one step at a time.", alt: "Python debugger paused at line 9, with the call stack and local total 180 and average 36 visible." },
    { src: `${media}/ipad-13/03-learn-by-doing.png`, device: "iPad", width: 2732, height: 2048, caption: "Keep the exercise beside your code.", alt: "Shell Essentials exercise instructions beside an editable starter solution and the Check Exercise action." },
    { src: `${media}/ipad-13/04-project-terminal.png`, device: "iPad", width: 2732, height: 2048, caption: "Run scripts in the project terminal.", alt: "Project terminal running python explore.py and displaying 180 total minutes and a 36-minute daily average." },
    { src: `${media}/ipad-13/06-original-readings.png`, device: "iPad", width: 2732, height: 2048, caption: "Read the idea. Try it in code.", alt: "Original Arguments and Files chapter explaining shell arguments, quoting, overwrite and append." },
    { src: `${media}/iphone-medium/01-code-anywhere.png`, device: "iPhone", width: 1206, height: 2622, caption: "A compact workspace for iPhone.", alt: "Python source open in the iPhone editor above the touch coding keyboard." },
    { src: `${media}/iphone-medium/03-learn-anywhere.png`, device: "iPhone", width: 1206, height: 2622, caption: "Bring your practice with you.", alt: "iPhone Learn library showing learning projects available to open." },
  ],
};
