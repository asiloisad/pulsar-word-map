'use babel'

import { CompositeDisposable } from 'atom'

let subscriptions

let dmap = {
    'q'    : 'θ',      'θ' : 'q',
    'w'    : 'ω',      'ω' : 'w',
    'e'    : 'ε',      'ε' : 'e',
    'r'    : 'ρ',      'ρ' : 'r',
    't'    : 'τ',      'τ' : 't',
    'y'    : 'ψ',      'ψ' : 'y',
    'u'    : 'υ',      'υ' : 'u',
    'i'    : 'ι',      'ι' : 'i',
    'o'    : 'ο',      'ο' : 'o',
    'p'    : 'π',      'π' : 'p',
    'a'    : 'α',      'α' : 'a',
    's'    : 'σ',      'σ' : 's',
    'd'    : 'δ',      'δ' : 'd',
    'f'    : 'φ',      'φ' : 'f',
    'g'    : 'γ',      'γ' : 'g',
    'h'    : 'η',      'η' : 'h',
    'j'    : 'ϕ',      'ϕ' : 'j',
    'k'    : 'κ',      'κ' : 'k',
    'l'    : 'λ',      'λ' : 'l',
    'z'    : 'ζ',      'ζ' : 'z',
    'x'    : 'ξ',      'ξ' : 'x',
    'c'    : 'χ',      'χ' : 'c',
    'b'    : 'β',      'β' : 'b',
    'n'    : 'ν',      'ν' : 'n',
    'm'    : 'μ',      'μ' : 'm',
    'Q'    : 'Θ',      'Θ' : 'Q',
    'W'    : 'Ω',      'Ω' : 'W',
    'Y'    : 'Ψ',      'Ψ' : 'Y',
    'P'    : 'Π',      'Π' : 'P',
    'S'    : 'Σ',      'Σ' : 'S',
    'D'    : 'Δ',      'Δ' : 'D',
    'F'    : 'ϑ',      'ϑ' : 'F',
    'G'    : 'Γ',      'Γ' : 'G',
    'J'    : 'Φ',      'Φ' : 'J',
    'L'    : 'Λ',      'Λ' : 'L',
    'X'    : 'Ξ',      'Ξ' : 'X',
    'C'    : 'Χ',      'Χ' : 'C',
    'V'    : 'ς',      'ς' : 'V',
    '1'    : '°',      '°' : '1',
    '2'    : 'ʾ',      'ʾ' : '2',
    '3'    : 'ϵ',      'ϵ' : '3',
    '5'    : '‰',      '‰' : '5',
    'sqrt' : '√',      '√' : 'sqrt',
    'sum'  : 'Σ',      'Σ' : 'sum'
}

export default {

  config: {
    silent: {
      type: 'boolean',
      title: "Silent mode",
      description: "Silent the warning messages",
      default: false,
      order: 1,
  }, customDmap: {
      type: 'string',
      title: 'Custom mapping',
      description: 'Custom mapping rules. This field should be a valid dictonary mapping.',
      default: '{}',
      order: 2,
    }},

  activate (_state) {
    subscriptions = new CompositeDisposable()

    subscriptions.add(atom.commands.add('atom-text-editor', {
      'word-map:auto'     : () => this.convert(0, 1),
      'word-map:selected' : () => this.convert(2   ),
      'word-map:fixed-1'  : () => this.convert(1, 1),
      'word-map:fixed-2'  : () => this.convert(1, 2),
      'word-map:fixed-3'  : () => this.convert(1, 3),
      'word-map:fixed-4'  : () => this.convert(1, 4),
      'word-map:fixed-5'  : () => this.convert(1, 5),
    }));
  },

  /**
  * Method to convert selected or fixed-length text acc. dmap.
  * @param {number} mode must be one of valid below
  * * 0: get selected text if selected, else get fixed length to analysis
  * * 1: only fixed length mode
  * * 2: only selection mode
  * @param {number} wLen -- integer, how many fixed length letter get to analysis
  * @returns {null} return nothing
  **/
  convert(mode=0, wLen=1) {

    const editor = atom.workspace.getActiveTextEditor()

    if (!editor) {return}

    var selections = editor.getSelections()

    for (var selection of selections) {

      if ((mode===0 && selection.isEmpty()) || mode===1) {
        lpoint = selection.cursor.getBufferPosition()
        selection.setBufferRange([[lpoint.row, lpoint.column-wLen], lpoint])
        word = selection.getText()
        if (word==='') {
          if (!atom.config.get('word-map.silent')) {
          atom.notifications.addWarning('The selection is empty')}
          return
        }

      } else if (selection.isSingleScreenLine()) {
        word = selection.getText()
        if (word==='') {
          if (!atom.config.get('word-map.silent')) {
          atom.notifications.addWarning('The selection is empty')}
          return
        }

      } else {
        if (!atom.config.get('word-map.silent')) {
        atom.notifications.addWarning('The multiline selection are not supported')}
        return
      }

      customDmap = eval(`(${atom.config.get("word-map.customDmap")})`)

      if (customDmap.hasOwnProperty(word)) {
        selection.insertText(customDmap[word])

      } else if (dmap.hasOwnProperty(word)) {
        selection.insertText(dmap[word])

      } else if (!atom.config.get('word-map.silent')) {
        atom.notifications.addWarning('Word "'+word+'" map do not exists')
      }
    }
  },
}
