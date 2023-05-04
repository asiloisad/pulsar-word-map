# word-map

![Tag](https://img.shields.io/github/v/tag/bacadra/atom-word-map?style=for-the-badge)
![LastCommit](https://img.shields.io/github/last-commit/bacadra/atom-word-map?style=for-the-badge)
![RepoSize](https://img.shields.io/github/repo-size/bacadra/atom-word-map?style=for-the-badge)
![Licence](https://img.shields.io/github/license/bacadra/atom-word-map?style=for-the-badge)

![AutoConvert](https://github.com/bacadra/word-map/blob/master/assets/ppt-1.gif?raw=true)

![SelectionConvert](https://github.com/bacadra/word-map/blob/master/assets/ppt-2.gif?raw=true)

Fast way to convert fixed length word to another one.

## Installation

### Atom Text Editor

The official Atom packages store has been disabled. To get latest version run the shell command

    apm install bacadra/atom-word-map

and obtain the package directly from Github repository.

### Pulsar Text Editor

The package has compability with [Pulsar](https://pulsar-edit.dev/) and can be install

    pulsar -p install bacadra/atom-word-map

or directly [word-map](https://web.pulsar-edit.dev/packages/word-map) from Pulsar package store.

## Features

* User can use custom mapping.
* Built-in mapping can be overwritten.
* Multi-line selection is not supported.
* The mutate works independent of snippets and use another convert key (default `F12`).
* Multi-cursor is supported.

## Methods

The below methods can be used:
* `word-map:auto`: if selection is not empty, then selected text go to convert. if selection is empty, then one char is used.
* `word-map:selected`: mutate selected text.
* `word-map:fixed-N`: get `N` letters before cursor and mutate it

## Examples

* the greek letters `α` can be write by input `a` and press convert key
* the greek letters `β` can be write by input `b` and press convert key
* the greek letters `π` can be write by input `p` and press convert key
* the ascii square root symbol `√` can be write by input `sqrt`, selection it and press convert key

## The built-in mapping

    `q    : θ`,      `θ  : q`,
    `w    : ω`,      `ω  : w`,
    `e    : ε`,      `ε  : e`,
    `r    : ρ`,      `ρ  : r`,
    `t    : τ`,      `τ  : t`,
    `y    : ψ`,      `ψ  : y`,
    `u    : υ`,      `υ  : u`,
    `i    : ι`,      `ι  : i`,
    `o    : ο`,      `ο  : o`,
    `p    : π`,      `π  : p`,
    `a    : α`,      `α  : a`,
    `s    : σ`,      `σ  : s`,
    `d    : δ`,      `δ  : d`,
    `f    : φ`,      `φ  : f`,
    `g    : γ`,      `γ  : g`,
    `h    : η`,      `η  : h`,
    `j    : ϕ`,      `ϕ  : j`,
    `k    : κ`,      `κ  : k`,
    `l    : λ`,      `λ  : l`,
    `z    : ζ`,      `ζ  : z`,
    `x    : ξ`,      `ξ  : x`,
    `c    : χ`,      `χ  : c`,
    `b    : β`,      `β  : b`,
    `n    : ν`,      `ν  : n`,
    `m    : μ`,      `μ  : m`,
    `Q    : Θ`,      `Θ  : Q`,
    `W    : Ω`,      `Ω  : W`,
    `E    : Σ`,      `Σ  : E`,
    `Y    : Ψ`,      `Ψ  : Y`,
    `P    : Π`,      `Π  : P`,
    `S    : Σ`,      `Σ  : S`,
    `D    : Δ`,      `Δ  : D`,
    `F    : ϑ`,      `ϑ  : F`,
    `G    : Γ`,      `Γ  : G`,
    `J    : Φ`,      `Φ  : J`,
    `L    : Λ`,      `Λ  : L`,
    `X    : Ξ`,      `Ξ  : X`,
    `C    : Χ`,      `Χ  : C`,
    `V    : ς`,      `ς  : V`,
    `1    : °`,      `°  : 1`,
    `2    : ʾ`,      `ʾ  : 2`,
    `3    : ϵ`,      `ϵ  : 3`,
    `5    : ‰`,      `‰  : 5`,
    `sqrt : √`,      `√  : sqrt`,
    `(C)  : ©`,      `©  : (C)`,
    `(R)  : ®`,      `®  : (R)`,
    `(TM) : ™`,      `™  : (TM)`,
    `...  : …`,      `…  : ...`,
    `'    : "`,      `"  : '`,

# Contributing

If you have ideas on how to improve the package, see bugs or want to support new features - feel free to share it via GitHub.

See my other packages for Atom & Pulsar Text Editors:

* [autocomplete-sofistik](https://github.com/bacadra/atom-autocomplete-sofistik)
* [bib-finder](https://github.com/bacadra/atom-bib-finder)
* [hydrogen-run](https://github.com/bacadra/atom-hydrogen-run)
* [image-paste](https://github.com/bacadra/atom-image-paste)
* [language-sofistik](https://github.com/bacadra/atom-language-sofistik)
* [linter-ruff](https://github.com/bacadra/atom-linter-ruff)
* [navigation-panel](https://github.com/bacadra/atom-navigation-panel)
* [open-external](https://github.com/bacadra/atom-open-external)
* [pdf-viewer](https://github.com/bacadra/atom-pdf-viewer)
* [project-files](https://github.com/bacadra/atom-project-files)
* [regex-aligner](https://github.com/bacadra/atom-regex-aligner)
* [sofistik-tools](https://github.com/bacadra/atom-sofistik-tools)
* [super-select](https://github.com/bacadra/atom-super-select)
* [word-map](https://github.com/bacadra/atom-word-map)
