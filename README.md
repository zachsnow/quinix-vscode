# Quinix language support

A [VS Code](https://code.visualstudio.com) extension that (barely) supports syntax highlighting for the
[Quinix](https://quinix.vein.io) low-level and assembly languages.  It was
built with the help of [Yeoman](https://yeoman.io/) and the
[VS Code Extension Generator](https://code.visualstudio.com/api/get-started/your-first-extension).

## Local development

Open the root of this repository in VS Code and hit `F5`. This will open a new
VS Code window with the extension running. Then open a `.qasm` or `.qll` file and
have a look -- it should be colorized.

## Installing from source

To install the extesion from source, first back-up your installed VS Code extensions
(located at `~/.vscode/extensions/`) for safe keeping, then run the following from the root
of this repository:

```bash
  $ ./install.sh
```

Then reload your VS Code window. (This will *not* install uncommitted changes as
it uses `git archive` under the hood.)
