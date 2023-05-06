# word-map

<p align="center">
  <a href="https://github.com/bacadra/atom-word-map/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/atom-word-map?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/atom-word-map/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/atom-word-map?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/atom-word-map/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/atom-word-map?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/atom-word-map/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/atom-word-map?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

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
<p align="center">
<a href="https://github.com/bacadra/atom-autocomplete-sofistik"><img src="https://img.shields.io/github/v/tag/bacadra/atom-autocomplete-sofistik?style=for-the-badge&label=autocomplete-sofistik&color=blue" alt="autocomplete-sofistik">
<a href="https://github.com/bacadra/atom-bib-finder"><img src="https://img.shields.io/github/v/tag/bacadra/atom-bib-finder?style=for-the-badge&label=bib-finder&color=blue" alt="bib-finder">
<a href="https://github.com/bacadra/atom-hydrogen-run"><img src="https://img.shields.io/github/v/tag/bacadra/atom-hydrogen-run?style=for-the-badge&label=hydrogen-run&color=blue" alt="hydrogen-run">
<a href="https://github.com/bacadra/atom-image-paste"><img src="https://img.shields.io/github/v/tag/bacadra/atom-image-paste?style=for-the-badge&label=image-paste&color=blue" alt="image-paste">
<a href="https://github.com/bacadra/atom-language-sofistik"><img src="https://img.shields.io/github/v/tag/bacadra/atom-language-sofistik?style=for-the-badge&label=language-sofistik&color=blue" alt="language-sofistik">
<a href="https://github.com/bacadra/atom-linter-ruff"><img src="https://img.shields.io/github/v/tag/bacadra/atom-linter-ruff?style=for-the-badge&label=linter-ruff&color=blue" alt="linter-ruff">
<a href="https://github.com/bacadra/atom-navigation-panel"><img src="https://img.shields.io/github/v/tag/bacadra/atom-navigation-panel?style=for-the-badge&label=navigation-panel&color=blue" alt="navigation-panel">
<a href="https://github.com/bacadra/atom-open-external"><img src="https://img.shields.io/github/v/tag/bacadra/atom-open-external?style=for-the-badge&label=open-external&color=blue" alt="open-external">
<a href="https://github.com/bacadra/atom-pdf-viewer"><img src="https://img.shields.io/github/v/tag/bacadra/atom-pdf-viewer?style=for-the-badge&label=pdf-viewer&color=blue" alt="pdf-viewer">
<a href="https://github.com/bacadra/atom-project-files"><img src="https://img.shields.io/github/v/tag/bacadra/atom-project-files?style=for-the-badge&label=project-files&color=blue" alt="project-files">
<a href="https://github.com/bacadra/atom-regex-aligner"><img src="https://img.shields.io/github/v/tag/bacadra/atom-regex-aligner?style=for-the-badge&label=regex-aligner&color=blue" alt="regex-aligner">
<a href="https://github.com/bacadra/atom-sofistik-tools"><img src="https://img.shields.io/github/v/tag/bacadra/atom-sofistik-tools?style=for-the-badge&label=sofistik-tools&color=blue" alt="sofistik-tools">
<a href="https://github.com/bacadra/atom-super-select"><img src="https://img.shields.io/github/v/tag/bacadra/atom-super-select?style=for-the-badge&label=super-select&color=blue" alt="super-select">
<a href="https://github.com/bacadra/atom-word-map"><img src="https://img.shields.io/github/v/tag/bacadra/atom-word-map?style=for-the-badge&label=word-map&color=blue" alt="word-map">
</p>
