# bacadra-word-map

Fast way to convert fixed length word or selection to new acc. word map! User can set custom maping (inc. overwriting built-in data). multi-line selection is not supported. There are few methods:

* `bacadra-word-map:auto`: if selection is not empty and single line, then selected text go to convert, else if selection is empty, then one char is getted.
* `bacadra-word-map:selected`: look only for selected text
* `bacadra-word-map:fixed-n`: get fixed length word and send it to convert

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

## See bacadra packages for Atom IDE

* [bacadra-atom](https://github.com/bacadra/bacadra-atom) general method to co-work with python bacadra package
* [bacadra-fold](https://github.com/bacadra/bacadra-fold) fold custom sections in various grammars files
* [bacadra-hydrogen](https://github.com/bacadra/bacadra-hydrogen) additional method to compute with hydrogen atom package
* [bacadra-outline](https://github.com/bacadra/bacadra-outline) outline document by custom marks
* [bacadra-word-map](https://github.com/bacadra/bacadra-word-map) easy way to fast convert fixed-length word's, e.g. input greek letters
