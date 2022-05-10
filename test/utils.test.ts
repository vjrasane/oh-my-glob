import { isPatternMatch } from "../src/utils"

describe("utils", () => {
	describe("isPatternMatch", () => {
		it("matches file within directory", () => {
				expect(
					isPatternMatch('node_modules/@types/lodash/common/util.d.ts', "node_modules")
				).toBe(true)
		})
	})
})