// mathml.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    math: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
    mfrac: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
    mn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    msup: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
    mi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    mrow: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
    mo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    // Add other MathML elements here if needed
  }
}
