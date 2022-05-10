import { isFileIncluded, isPatternMatch, recursiveGetFiles } from "../src/utils"

describe("utils", () => {
	describe("isPatternMatch", () => {
		it("matches file within directory", () => {
				expect(
					isPatternMatch('node_modules/@types/lodash/common/util.d.ts', "node_modules")
				).toBe(true)
		})

		it("does not matche file with no overlap", () => {
			expect(
				isPatternMatch('node_modules/@types/lodash/common/util.d.ts', "dist")
			).toBe(false)
		});

		it("matches with arbitrary extension", () => {
			expect(
				isPatternMatch("test-root/test-dir/other.file", "**/other.*")
			).toBe(true)
		})
	});

	describe("isFileIncluded", () => {
		it("includes file with empty patterns", () => {
			expect(
				isFileIncluded('node_modules/@types/lodash/common/util.d.ts', [])
			).toBe(false)
	})

		it("includes file with star", () => {
				expect(
					isFileIncluded('node_modules/@types/lodash/common/util.d.ts', ["*"])
				).toBe(true)
		})

		it("excludes file with negated directory", () => {
			expect(
				isFileIncluded('node_modules/@types/lodash/common/util.d.ts', ["*", "!node_modules"])
			).toBe(false)
		})

		it("includes file with exact match", () => {
			expect(
				isFileIncluded('node_modules/@types/lodash/common/util.d.ts', ["*", "!node_modules",
			"node_modules/@types/lodash/common/util.d.ts"])
			).toBe(true)
		})
	})
})