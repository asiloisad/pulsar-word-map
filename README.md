# word-map

![AutoConvert](https://github.com/bacadra/pulsar-word-map/blob/master/assets/ppt-1.gif?raw=true)

![SelectionConvert](https://github.com/bacadra/pulsar-word-map/blob/master/assets/ppt-2.gif?raw=true)

Fast way to convert fixed length word to another one.

## Installation

To install `word-map` search for [word-map](https://web.pulsar-edit.dev/packages/word-map) in the Install pane of the Pulsar settings or run `ppm install word-map`. Alternatively, you can run `ppm install bacadra/pulsar-word-map` to install a package directly from the Github repository.

## Features

- User can use custom mapping.
- Built-in mapping can be overwritten.
- Multi-line selection is not supported.
- The mutate works independent of snippets and use another convert key (default `F12`).
- Multi-cursor is supported.

## Methods

The below methods can be used:
- `word-map:auto`: if selection is not empty, then selected text go to convert. if selection is empty, then one char is used.
- `word-map:selected`: mutate selected text.
- `word-map:fixed-N`: get `N` letters before cursor and mutate it

## Examples

- the greek letters `α` can be write by input `a` and press convert key
- the greek letters `β` can be write by input `b` and press convert key
- the greek letters `π` can be write by input `p` and press convert key
- the ascii square root symbol `√` can be write by input `sqrt`, selection it and press convert key

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

If you have any ideas on how to improve the package, spot any bugs, or would like to support the development of new features, please feel free to share them via GitHub.
