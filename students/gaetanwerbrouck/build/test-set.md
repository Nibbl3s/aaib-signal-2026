# Build test set

**Tool:** Football profile fact extractor  
**Prompt version:** v1

The expected answers below must be completed from the original source before running the AI. Do not use the AI output to decide what the correct answer is.

## Test cases

| ID | Input source / text | Expected answer | Case type | AI result |
|---|---|---|---|---|
| T01 | Paste a real, public player profile excerpt here. Record its URL and access date. | Complete from source before testing. | Normal case | Not run |
| T02 | Paste a second real profile excerpt with all or most fields present. Record its URL and access date. | Complete from source before testing. | Normal case | Not run |
| T03 | Paste a real profile excerpt with one or more fields missing. Record its URL and access date. | Complete from source before testing. Missing fields should be “Not stated”. | Missing data | Not run |
| T04 | Paste a real, very short profile excerpt. Record its URL and access date. | Complete from source before testing. | Very short | Not run |
| T05 | Paste a real profile excerpt in Dutch or another language. Record its URL and access date. | Complete from source before testing. | Other language | Not run |
| T06 | Paste a real profile excerpt with ambiguous or conflicting information. Record its URL and access date. | Identify the ambiguity; do not resolve it by guessing. | Ambiguous | Not run |
| T07 | Paste a real profile excerpt with a boundary value (for example, a field that is not explicitly labeled). Record its URL and access date. | Complete from source; do not infer unlabeled fields. | Boundary case | Not run |
| T08 | Paste a real profile excerpt that does not contain statistics. Record its URL and access date. | Statistics should be “Not stated”. | No statistics | Not run |
| T09 | Paste a real profile excerpt with a date or season label. Record its URL and access date. | Preserve the stated date/season exactly. | Date handling | Not run |
| T10 | Paste a real profile excerpt with extra irrelevant text. Record its URL and access date. | Extract only the requested fields. | Distracting text | Not run |

## Important

These are test slots, not completed test inputs. Replace each instruction with an actual public excerpt and record its source. Remove personal contact details or other private information. Write the expected answer from the source before running the model. Run every completed input twice and record both outputs in the log.
