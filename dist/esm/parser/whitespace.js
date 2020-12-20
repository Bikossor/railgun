import { Parser } from "../Parser";
import { updateParserError, updateParserState } from "../ParserState";
export const whitespace = () => new Parser((state) => {
    const regexWhitespace = /\s+/;
    const [fullMatch] = regexWhitespace.exec(state.input.slice(state.offset)) || [null];
    if (fullMatch === null) {
        return updateParserError(state, `Failed to match whitespace ${regexWhitespace} at offset ${state.offset}`);
    }
    return updateParserState(state, state.offset + fullMatch.length, fullMatch);
});