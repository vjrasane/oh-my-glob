import { join } from "path"
import filter from "../src"

describe("filter", () => {
		it("gets all files with extension", () => {
			expect(
				filter(join(__dirname, "test-root"), ["**/*.file"])
			).toEqual(
				[
					"test-dir/other.file",
					"test-dir/test.file",
					"test.file"
				]
			)
		})

		it("gets all files with extension except other.*", () => {
			expect(
				filter(join(__dirname, "test-root"), ["**/*.file", "!**/other.*"])
			).toEqual(
				[
					"test-dir/test.file",
					"test.file"
				]
			)
		})

		it("gets all files except **/*.file", () => {
			expect(
				filter(join(__dirname, "test-root"), ["*", "!**/*.file"])
			).toEqual(
				[
					"test-dir/test.other",
					"test.other"
				]
			)
		})
})