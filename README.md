# word-map

Fast way to convert fixed length word or selection to new acc. word map! User can set custom maping (inc. overwriting built-in data). multi-line selection is not supported. There are few methods:

* `word-map:auto`: if selection is not empty and single line, then selected text go to convert, else if selection is empty, then one char is getted.
* `word-map:selected`: look only for selected text
* `word-map:fixed-n`: get fixed length word and send it to convert

e.g. the greek letters can be input very fast, e.g. input `a` and press convert key (default is `F12`).

The built-in mapping:
    `q    : θ`,      `θ : q`,
    `w    : ω`,      `ω : w`,
    `e    : ε`,      `ε : e`,
    `r    : ρ`,      `ρ : r`,
    `t    : τ`,      `τ : t`,
    `y    : ψ`,      `ψ : y`,
    `u    : υ`,      `υ : u`,
    `i    : ι`,      `ι : i`,
    `o    : ο`,      `ο : o`,
    `p    : π`,      `π : p`,
    `a    : α`,      `α : a`,
    `s    : σ`,      `σ : s`,
    `d    : δ`,      `δ : d`,
    `f    : φ`,      `φ : f`,
    `g    : γ`,      `γ : g`,
    `h    : η`,      `η : h`,
    `j    : ϕ`,      `ϕ : j`,
    `k    : κ`,      `κ : k`,
    `l    : λ`,      `λ : l`,
    `z    : ζ`,      `ζ : z`,
    `x    : ξ`,      `ξ : x`,
    `c    : χ`,      `χ : c`,
    `b    : β`,      `β : b`,
    `n    : ν`,      `ν : n`,
    `m    : μ`,      `μ : m`,
    `Q    : Θ`,      `Θ : Q`,
    `W    : Ω`,      `Ω : W`,
    `Y    : Ψ`,      `Ψ : Y`,
    `P    : Π`,      `Π : P`,
    `S    : Σ`,      `Σ : S`,
    `D    : Δ`,      `Δ : D`,
    `F    : ϑ`,      `ϑ : F`,
    `G    : Γ`,      `Γ : G`,
    `J    : Φ`,      `Φ : J`,
    `L    : Λ`,      `Λ : L`,
    `X    : Ξ`,      `Ξ : X`,
    `C    : Χ`,      `Χ : C`,
    `V    : ς`,      `ς : V`,
    `1    : °`,      `° : 1`,
    `2    : ʾ`,      `ʾ : 2`,
    `3    : ϵ`,      `ϵ : 3`,
    `5    : ‰`,      `‰ : 5`,
    `sqrt : √`,      `√ : sqrt`

## Knows issues

* text in "find-and-replace" pane cannot be replaced, instead text in TextEditor is changed :/

## See another bacadra packages...

* [bacadra-atom](https://github.com/bacadra/bacadra-atom)
* [bib-finder](https://github.com/bacadra/bib-finder)
* [fold-section](https://github.com/bacadra/fold-section)
* [hydrogen-run](https://github.com/bacadra/hydrogen-run)
* [language-bacadra](https://github.com/bacadra/language-bacadra)
* [language-sofistik](https://github.com/bacadra/language-sofistik)
* [navigation-pane](https://github.com/bacadra/navigation-pane)
* [sofistik-atom](https://github.com/bacadra/sofistik-atom)
* [word-map](https://github.com/bacadra/word-map)
