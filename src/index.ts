
import { recursiveGetFiles } from "./utils";

/**
 * Filters files in the directory tree starting from given root directory based on given glob patterns.
 * 
 * @param {String} directory root of the directory tree for the filtering
 * @param {Array<String>} patterns array of glob patterns to be matched against
 * @returns {Array<String>} array of matching file names relative to the root directory
 */
const filter = (directory: string, patterns: string[]) => recursiveGetFiles(patterns, directory);

export default filter;
