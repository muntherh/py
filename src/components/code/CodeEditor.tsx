import { useEffect, useMemo, useRef } from "react";
import CodeMirror, { type ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { HighlightStyle, indentUnit, syntaxHighlighting } from "@codemirror/language";
import { Decoration, EditorView, keymap, type DecorationSet } from "@codemirror/view";
import { Prec, StateEffect, StateField } from "@codemirror/state";
import { tags as t } from "@lezer/highlight";
import { useSettings } from "../../store/settingsStore";
import { useResolvedTheme } from "../../lib/useResolvedTheme";

const setErrorLine = StateEffect.define<number | null>();
const errorLineField = StateField.define<DecorationSet>({
  create: () => Decoration.none,
  update(deco, tr) {
    deco = deco.map(tr.changes);
    for (const e of tr.effects) {
      if (e.is(setErrorLine)) {
        if (e.value === null || e.value < 1 || e.value > tr.state.doc.lines) deco = Decoration.none;
        else deco = Decoration.set([Decoration.line({ class: "cm-error-line" }).range(tr.state.doc.line(e.value).from)]);
      }
    }
    if (tr.docChanged) deco = Decoration.none;
    return deco;
  },
  provide: (f) => EditorView.decorations.from(f),
});

const highlight = HighlightStyle.define([
  { tag: [t.keyword, t.controlKeyword, t.operatorKeyword, t.definitionKeyword, t.moduleKeyword], color: "#c084fc", fontWeight: "500" },
  { tag: [t.string, t.special(t.string)], color: "#86efac" },
  { tag: [t.number, t.bool, t.null, t.atom], color: "#fdba74" },
  { tag: [t.comment, t.lineComment], color: "var(--subtle)", fontStyle: "italic" },
  { tag: [t.function(t.variableName), t.standard(t.variableName)], color: "#93c5fd" },
  { tag: [t.operator, t.compareOperator, t.arithmeticOperator, t.logicOperator], color: "#f9a8d4" },
  { tag: [t.variableName, t.propertyName], color: "var(--text)" },
  { tag: [t.paren, t.bracket, t.brace, t.punctuation], color: "var(--muted)" },
  { tag: t.invalid, color: "#fca5a5" },
]);

const lightHighlight = HighlightStyle.define([
  { tag: [t.keyword, t.controlKeyword, t.operatorKeyword, t.definitionKeyword, t.moduleKeyword], color: "#7c3aed", fontWeight: "500" },
  { tag: [t.string, t.special(t.string)], color: "#15803d" },
  { tag: [t.number, t.bool, t.null, t.atom], color: "#c2410c" },
  { tag: [t.comment, t.lineComment], color: "#4b5563", fontStyle: "italic" },
  { tag: [t.function(t.variableName), t.standard(t.variableName)], color: "#1d4ed8" },
  { tag: [t.operator, t.compareOperator, t.arithmeticOperator, t.logicOperator], color: "#be185d" },
  { tag: [t.variableName, t.propertyName], color: "#111633" },
  { tag: [t.paren, t.bracket, t.brace, t.punctuation], color: "#4a5276" },
]);

const baseTheme = EditorView.theme({
  "&": { color: "var(--text)", backgroundColor: "var(--code-bg)" },
  ".cm-content": { caretColor: "var(--primary)", padding: "10px 0" },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: "var(--primary)", borderLeftWidth: "2px" },
  ".cm-gutters": { backgroundColor: "var(--code-bg)", color: "var(--subtle)", border: "none", borderRight: "1px solid var(--border)" },
  ".cm-activeLineGutter": { backgroundColor: "var(--surface-2)", color: "var(--text)" },
  ".cm-activeLine": { backgroundColor: "color-mix(in srgb, var(--surface-2) 70%, transparent)" },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground, ::selection": { backgroundColor: "var(--primary-soft) !important" },
  ".cm-matchingBracket": { backgroundColor: "var(--accent-soft)", outline: "1px solid var(--accent)" },
  ".cm-error-line": { backgroundColor: "var(--danger-soft)", boxShadow: "inset 3px 0 0 var(--danger)" },
  ".cm-line": { padding: "0 12px" },
});

export interface CodeEditorProps {
  value: string;
  onChange?: (v: string) => void;
  onRun?: () => void;
  errorLine?: number | null;
  readOnly?: boolean;
  minHeight?: string;
  maxHeight?: string;
  ariaLabel: string;
  autoFocus?: boolean;
}

export function CodeEditor({ value, onChange, onRun, errorLine, readOnly, minHeight = "160px", maxHeight, ariaLabel, autoFocus }: CodeEditorProps) {
  const ref = useRef<ReactCodeMirrorRef>(null);
  const { editorFontSize, lineWrap, showLineNumbers } = useSettings();
  const theme = useResolvedTheme();
  const onRunRef = useRef(onRun);
  onRunRef.current = onRun;

  const extensions = useMemo(
    () => [
      python(),
      indentUnit.of("    "),
      syntaxHighlighting(theme === "light" ? lightHighlight : highlight),
      baseTheme,
      errorLineField,
      ...(lineWrap ? [EditorView.lineWrapping] : []),
      EditorView.contentAttributes.of({ "aria-label": ariaLabel }),
      Prec.highest(
        keymap.of([
          { key: "Shift-Enter", run: () => (onRunRef.current?.(), true) },
          { key: "Mod-Enter", run: () => (onRunRef.current?.(), true) },
        ]),
      ),
    ],
    [theme, lineWrap, ariaLabel],
  );

  useEffect(() => {
    const view = ref.current?.view;
    if (view) view.dispatch({ effects: setErrorLine.of(errorLine ?? null) });
  }, [errorLine]);

  return (
    <div className="overflow-hidden rounded-xl border border-line" style={{ ["--editor-font-size" as string]: `${editorFontSize}px` }}>
      <CodeMirror
        ref={ref}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        editable={!readOnly}
        autoFocus={autoFocus}
        theme="none"
        minHeight={minHeight}
        maxHeight={maxHeight}
        extensions={extensions}
        indentWithTab
        basicSetup={{
          lineNumbers: showLineNumbers,
          foldGutter: false,
          highlightActiveLine: !readOnly,
          highlightActiveLineGutter: !readOnly,
          autocompletion: false,
          bracketMatching: true,
          closeBrackets: true,
          indentOnInput: true,
          tabSize: 4,
          searchKeymap: true,
        }}
      />
    </div>
  );
}
