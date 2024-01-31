type Translator = { "fr":string, "en":string}

export function translate(lang:string, trans:Translator): string {
  let desc : string = "placeholder"
  switch (lang) {
    case "fr":
      return trans.fr
      break;
    case "en":
      return trans.en
      break;
    default:
      return trans.fr
      break;
  }
}