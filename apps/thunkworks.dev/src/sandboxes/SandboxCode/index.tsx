type SandboxCodeProps = {
  code?: string;
};

const css = {
  pre: 'thwx-sandbox-code-pre',
  root: 'thwx-sandbox-code-root',
};

export function SandboxCode({ code = `` }: SandboxCodeProps) {
  return (
    <div className={css.root}>
      <pre className={css.pre}>
        <code dangerouslySetInnerHTML={{ __html: `${code}` }} />
      </pre>
    </div>
  );
}
