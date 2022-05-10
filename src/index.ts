
import { recursiveGetFiles } from "./utils";

export default (directory: string, patterns: string[]) => recursiveGetFiles(patterns, directory);
