import { readdirSync, statSync } from "fs";
import minimatch from "minimatch";
import path, { join, relative } from "path";

export const isPatternMatch = (file: string, pattern: string): boolean => {
	const parts = file.split(path.sep);
	const current = [];
	for(let part of parts) {
		current.push(part)
		const str = current.join(path.sep);
		if (minimatch(str, pattern)) return true;
	}
	return false;
}

export const isFileIncluded = (file: string, patterns: string[]): boolean => {
	let match = false
	for (let pattern of patterns) {
		const isNegation = pattern.startsWith("!");
		if (isPatternMatch(
			file,
			!isNegation ? pattern : pattern.substring(1))
		) match = isNegation ? false : true;
	}
	return match;
}

export const recursiveGetFiles = (
	patterns: string[], currentDir: string, rootDir: string = currentDir
): Array<string> => {
	return readdirSync(currentDir).flatMap(
		(file): Array<string> => {
			const filePath = join(currentDir, file);
			const relativePath = relative(rootDir, filePath);
			if(!statSync(filePath).isDirectory()) 
				return isFileIncluded(relativePath, patterns) ? [relativePath] : [];
			return recursiveGetFiles(patterns, filePath, rootDir);
		} 
	);
} 