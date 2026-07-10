interface SICCode {
    code: string;
    description: string;
    section: string;
    sectionName: string;
    division: string;
    group: string;
    classCode: string;
}
interface SICSection {
    letter: string;
    name: string;
    divisions: string[];
    codes: string[];
}
/**
 * Look up a SIC code by its numeric string.
 * Accepts 4 or 5 digit codes (e.g. "6201" or "62012").
 * Returns null if the code is not found.
 */
declare function lookup(code: string): SICCode | null;
/**
 * Search SIC codes by keyword. Returns matching codes sorted by relevance.
 * Case-insensitive. Matches against code descriptions.
 *
 * @param query - Search term (e.g. "restaurant", "software", "mining")
 * @param limit - Maximum number of results (default: 20)
 */
declare function search(query: string, limit?: number): SICCode[];
/**
 * Validate whether a string is a valid UK SIC 2007 code.
 * Accepts 4 or 5 digit codes.
 */
declare function validate(code: string): boolean;
/**
 * Get all codes belonging to a section (A-U).
 */
declare function listSection(sectionLetter: string): SICCode[];
/**
 * Get all codes belonging to a division (2-digit prefix, e.g. "62" for IT).
 */
declare function listDivision(divisionCode: string): SICCode[];
/**
 * Get the full SIC hierarchy: all sections with their codes.
 */
declare function tree(): SICSection[];
/**
 * Get all section letters and names.
 */
declare function sections(): Array<{
    letter: string;
    name: string;
}>;
/**
 * Get the total number of SIC codes in the database.
 */
declare function count(): number;

export { type SICCode, type SICSection, count, listDivision, listSection, lookup, search, sections, tree, validate };
