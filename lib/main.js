const { CompositeDisposable } = require('atom')

module.exports = {

  config: {
    silentQ: {
      type: 'boolean',
      title: "Silent mode",
      description: "Silent the warning messages",
      default: false,
      order: 1,
    },
    customMAP: {
      type: 'string',
      title: 'Custom mapping',
      description: 'Custom mapping rules. This field should be a valid dictonary mapping without brackets e.g. `s:σ, σ:s`',
      default: '',
      order: 2,
    },
  },

  MAP: {
      'q'    : 'θ',      'θ'  : 'q',
      'w'    : 'ω',      'ω'  : 'w',
      'e'    : 'ε',      'ε'  : 'e',
      'r'    : 'ρ',      'ρ'  : 'r',
      't'    : 'τ',      'τ'  : 't',
      'y'    : 'ψ',      'ψ'  : 'y',
      'u'    : 'υ',      'υ'  : 'u',
      'i'    : 'ι',      'ι'  : 'i',
      'o'    : 'ο',      'ο'  : 'o',
      'p'    : 'π',      'π'  : 'p',
      'a'    : 'α',      'α'  : 'a',
      's'    : 'σ',      'σ'  : 's',
      'd'    : 'δ',      'δ'  : 'd',
      'f'    : 'φ',      'φ'  : 'f',
      'g'    : 'γ',      'γ'  : 'g',
      'h'    : 'η',      'η'  : 'h',
      'j'    : 'ϕ',      'ϕ'  : 'j',
      'k'    : 'κ',      'κ'  : 'k',
      'l'    : 'λ',      'λ'  : 'l',
      'z'    : 'ζ',      'ζ'  : 'z',
      'x'    : 'ξ',      'ξ'  : 'x',
      'c'    : 'χ',      'χ'  : 'c',
      'b'    : 'β',      'β'  : 'b',
      'n'    : 'ν',      'ν'  : 'n',
      'm'    : 'μ',      'μ'  : 'm',
      'Q'    : 'Θ',      'Θ'  : 'Q',
      'W'    : 'Ω',      'Ω'  : 'W',
      'E'    : 'Σ',      'Σ'  : 'E',
      'Y'    : 'Ψ',      'Ψ'  : 'Y',
      'P'    : 'Π',      'Π'  : 'P',
      'S'    : 'Σ',      'Σ'  : 'S',
      'D'    : 'Δ',      'Δ'  : 'D',
      'F'    : 'ϑ',      'ϑ'  : 'F',
      'G'    : 'Γ',      'Γ'  : 'G',
      'J'    : 'Φ',      'Φ'  : 'J',
      'L'    : 'Λ',      'Λ'  : 'L',
      'X'    : 'Ξ',      'Ξ'  : 'X',
      'C'    : 'Χ',      'Χ'  : 'C',
      'V'    : 'ς',      'ς'  : 'V',
      '1'    : '°',      '°'  : '1',
      '2'    : 'ʾ',      'ʾ'  : '2',
      '3'    : 'ϵ',      'ϵ'  : '3',
      '5'    : '‰',      '‰'  : '5',
      'sqrt' : '√',      '√'  : 'sqrt',
      "(C)"  : "©",      "©"  : "(C)" ,
      '(R)'  : '®',      '®'  : '(R)' ,
      '(TM)' : '™',      '™'  : '(TM)',
      '...'  : '…',      '…'  : '...',
      "'"    : '"',      '"'  : "'" ,
  },

  activate () {
    this.disposables = new CompositeDisposable()
    this.disposables.add
      (atom.commands.add('atom-text-editor', {
        'word-map:auto'     : (e) => this.convert(e, 0, 1),
        'word-map:selected' : (e) => this.convert(e, 2   ),
        'word-map:fixed-1'  : (e) => this.convert(e, 1, 1),
        'word-map:fixed-2'  : (e) => this.convert(e, 1, 2),
        'word-map:fixed-3'  : (e) => this.convert(e, 1, 3),
        'word-map:fixed-4'  : (e) => this.convert(e, 1, 4),
        'word-map:fixed-5'  : (e) => this.convert(e, 1, 5),
      }),
      atom.config.observe("word-map.customMAP", (value) => {
        this.parseAndSetFromString(value)
      }),
    );
  },

  deactivate () {
    this.disposables.dispose()
  },

  convert(e, mode=0, wLen=1) {
    const element = e.target.closest('atom-text-editor')
    if (!element) { return }
    const editor = element.getModel()
    if (!editor) { return }

    editor.mutateSelectedText( (selection) => {
      let word
      if ((mode===0 && selection.isEmpty()) || mode===1) {
        let lpoint = selection.cursor.getBufferPosition()
        selection.setBufferRange([[lpoint.row, lpoint.column-wLen], lpoint])
        word = selection.getText()
        if (word==='') {
          if (!atom.config.get('word-map.silentQ')) {
          atom.notifications.addWarning('The selection is empty')}
          return
        }

      } else if (selection.isSingleScreenLine()) {
        word = selection.getText()
        if (word==='') {
          if (!atom.config.get('word-map.silentQ')) {
          atom.notifications.addWarning('The selection is empty')}
          return
        }

      } else {
        if (!atom.config.get('word-map.silentQ')) {
        atom.notifications.addWarning('The multiline selection is not supported')}
        return
      }

      if (this.customMAP.hasOwnProperty(word)) {
        selection.insertText(this.customMAP[word])

      } else if (this.MAP.hasOwnProperty(word)) {
        selection.insertText(this.MAP[word])

      } else if (!atom.config.get('word-map.silentQ')) {
        atom.notifications.addWarning(`Word "${word}" map do not exists`)
      }
    })
  },

  parseAndSetFromString(text) {
    let pairs = text.split(',')
    let cm = {}
    let txt, k, v
    for (let pair of pairs) {
      if (pair.trim()==="") {
        continue
      } else if (!pair.includes(":")) {
        continue
      }
      txt = pair.split(':')
      k = txt[0].trim()
      v = txt[1].trim()
      cm[k] = v
    }
    this.customMAP = cm
  },

}
