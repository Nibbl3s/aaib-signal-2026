# Week 2 — Borderline modality cases

**Student:** Ruben Naessens  
**Beat:** AI in international recruitment  
**Status:** AI-assisted draft for student review. These are hypothetical scenarios and proposed decisions, not additional measured tests or practitioner observations.

## Three borderline modality cases

| Case | Suitable approach | Why and what to verify | When a simpler approach is better |
| --- | --- | --- | --- |
| A recruiter receives a screenshot of a job advertisement. | Extract the text with OCR first. A vision model may help if layout affects meaning; a language model may then distinguish mandatory from preferred qualifications. | The source consists of pixels. Check negation, experience thresholds, language levels and certificate names against the original image before interpreting them. OCR can be conventional or learned; a generative vision model is not automatically necessary. | If the original webpage contains selectable text, copy or extract that directly. Avoid creating an image-transcription problem unnecessarily. |
| A hiring manager sends a voice note describing essential and optional qualifications. | Transcribe the audio, then interpret requirement wording where needed. | Audio needs a transcription step before text extraction. Check phrases such as “required,” “not required” and “preferred.” Ask the manager to clarify genuinely ambiguous requirements rather than letting a model guess their intent. | For a short, occasional message, manual transcription or asking for a structured written list may take less effort than setting up an automated workflow. |
| A vacancy PDF has separate columns for required and preferred qualifications. | Parse embedded text and table structure first. Use OCR for scanned pages; consider a language or vision model only where layout or wording remains ambiguous. | A structured table may already encode the classification. Verify that rows and column headings stay aligned: an extraction error could turn a preference into a requirement. | If the table structure is reliable, ordinary parsing can map its contents directly. An ATS export or source spreadsheet may be even simpler. |

## How this connects to the Build

The Build extracts qualifications from supplied job-ad text. It does not test image interpretation, speech transcription or PDF parsing. These scenarios explain how the input format changes the tools needed before that extraction step.

Use the same decision sequence in each case:
1. Identify the original input format.
2. Check whether a simpler text or structured source is available.
3. Choose the minimum processing needed to obtain reliable text.
4. Decide whether interpreting that text needs a language model.
5. Verify the result against the source before using it in recruitment.

## Related evidence

- [v1 prompt](../build/prompt.v1.md)
- [Original ten-input test set and expected checks](../build/test-set.md)
- [Original results log and three-row probe plan](../build/log.md)
- [Week 2 signal post](../posts/week-02.md)

*AI-use disclosure: ChatGPT drafted these scenarios and proposed reasoning from the coursework discussion. Ruben should review, revise and be able to defend the choices before treating this draft as final personal analysis. No new test results are claimed.*
