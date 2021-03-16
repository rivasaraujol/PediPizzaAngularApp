var compile = require('../template').compile

// Originally based on: https://github.com/geraintluff/tv4/tree/master/lang
module.exports = {
  // INVALID_TYPE
  type: {
    de: compile('Ungültiger typ, erwartet wurde {{&schema}}'),
    en: compile('Invalid type, expected {{&schema}}'),
    fr: compile('Type invalide, {{&schema}} attendu'),
    nb: compile('Ugyldig type, forventet {{&schema}}'),
    'pl-PL': compile('Niepoprawny typ, spodziewany {{&schema}}'),
    'pl-PT': compile('Tipo inválido, esperava {{&schema}}'),
    'sv-SE': compile('Otillåten typ, skall vara {{&schema}}'),
    'zh-CN': compile('当前类型不符合期望的类型 {{&schema}}')
  },
  // STRING_PATTERN
  pattern: {
    de: compile('Zeichenkette entspricht nicht dem Muster: {{&schema}}'),
    en: compile('String does not match pattern: {{&schema}}'),
    fr: compile('Le texte ne correspond pas au motif: {{&schema}}'),
    nb: compile('Strengen samsvarer ikke med regulært uttrykk: {{&schema}}'),
    'pl-PL': compile('Napis nie pasuje do wzoru: {{&schema}}'),
    'pl-PT': compile('A "string" não corresponde ao modelo: {{&schema}}'),
    'sv-SE': compile('Texten har fel format: {{&schema}}'),
    'zh-CN': compile('字符串不匹配模式: {{&schema}}')
  },
  // ARRAY_LENGTH_SHORT
  minItems: {
    de: compile('Array zu kurz, minimum {{&schema}}'),
    en: compile('Array is too short, minimum {{&schema}}'),
    fr: compile('Le tableau est trop court, minimum {{&schema}}'),
    nb: compile('Listen er for kort, minst {{&schema}}'),
    'pl-PL': compile('Tablica ma za mało elementów, minimum {{&schema}}'),
    'pl-PT': compile('A "array" é muito curta, mínimo {{&schema}}'),
    'sv-SE': compile('Listan är för kort, ska minst vara {{&schema}}'),
    'zh-CN': compile('数组长度太短, 最小长度 {{&schema}}')
  },
  // ARRAY_LENGTH_LONG
  maxItems: {
    de: compile('Array zu lang, maximum {{&schema}}'),
    en: compile('Array is too long, maximum {{&schema}}'),
    fr: compile('Le tableau est trop long, maximum {{&schema}}'),
    nb: compile('Listen er for lang, maksimalt {{&schema}}'),
    'pl-PL': compile('Tablica ma za dużo elementów, maximum {{&schema}}'),
    'pl-PT': compile('A "array" é muito longa, máximo {{&schema}}'),
    'sv-SE': compile('Listan är för lång, ska högst vara {{&schema}}'),
    'zh-CN': compile('数组长度太长, 最大长度 {{&schema}}')
  },
  // STRING_LENGTH_SHORT
  minLength: {
    de: compile('Zeichenkette zu kurz, minimum {{&schema}}'),
    en: compile('String is too short, minimum {{&schema}}'),
    fr: compile('Le texte est trop court, minimum {{&schema}}'),
    nb: compile('Strengen er for kort, minst {{&schema}}'),
    'pl-PL': compile('Napis jest za krótki, minimum {{&schema}}'),
    'pl-PT': compile('A "string" é muito curta, mínimo {{&schema}}'),
    'sv-SE': compile('Texten är för kort, ska vara minst {{&schema}} tecken'),
    'zh-CN': compile('字符串太短, 最少 {{&schema}} 个')
  },
  // STRING_LENGTH_LONG
  maxLength: {
    de: compile('Zeichenkette zu lang, maximum {{&schema}}'),
    en: compile('String is too long, maximum {{&schema}}'),
    fr: compile('Le texte est trop long, maximum {{&schema}}'),
    nb: compile('Strengen er for lang, maksimalt {{&schema}}'),
    'pl-PL': compile('Napis jest za długi, maksimum {{&schema}}'),
    'pl-PT': compile('A "string" é muito longa, máximo {{&schema}}'),
    'sv-SE': compile('Texten är för lång, ska vara högst {{&schema}}'),
    'zh-CN': compile('字符串太长, 最多 {{&schema}} 个')
  },
  // OBJECT_PROPERTIES_MINIMUM
  minProperties: {
    de: compile('Zu wenige Attribute definiert, minimum {{&schema}}'),
    en: compile('Too few properties defined, minimum {{&schema}}'),
    fr: compile('Pas assez de propriétés définies, minimum {{&schema}}'),
    nb: compile('For få variabler definert, minst {{&schema}} er forventet'),
    'pl-PL': compile('Za mało zdefiniowanych pól, minimum {{&schema}}'),
    'pl-PT': compile('Poucas propriedades definidas, mínimo {{&schema}}'),
    'sv-SE': compile('För få parametrar, ska minst vara {{&schema}}'),
    'zh-CN': compile('字段数过少, 最少 {{&schema}} 个')
  },
  // OBJECT_PROPERTIES_MAXIMUM
  maxProperties: {
    de: compile('Zu viele Attribute definiert, maximum {{&schema}}'),
    en: compile('Too many properties defined, maximum {{&schema}}'),
    fr: compile('Trop de propriétés définies, maximum {{&schema}}'),
    nb: compile('For mange variabler definert, makismalt {{&schema}} er tillatt'),
    'pl-PL': compile('Za dużo zdefiniowanych pól, maksimum {{&schema}}'),
    'pl-PT': compile('Muitas propriedades definidas, máximo {{&schema}}'),
    'sv-SE': compile('För många parametrar, får högst vara {{&schema}}'),
    'zh-CN': compile('字段数过多, 最多 {{&schema}} 个')
  },
  // NUMBER_MINIMUM
  minimum: {
    de: compile('Wert {{&data}} ist kleiner als das Minimum {{&schema}}'),
    en: compile('Value {{&data}} is less than minimum {{&schema}}'),
    fr: compile('La valeur {{&data}} est inférieure au minimum {{&schema}}'),
    nb: compile('Verdien {{&data}} er mindre enn minsteverdi {{&schema}}'),
    'pl-PL': compile('Wartość {{&data}} jest mniejsza niż {{&schema}}'),
    'pl-PT': compile('O valor {{&data}} é menor que o mínimo {{&schema}}'),
    'sv-SE': compile('Värdet {{&data}} får inte vara mindre än {{&schema}}'),
    'zh-CN': compile('数值 {{&data}} 小于最小值 {{&schema}}')
  },
  // NUMBER_MAXIMUM
  maximum: {
    de: compile('Wert {{&data}} ist größer als das Maximum {{&schema}}'),
    en: compile('Value {{&data}} is greater than maximum {{&schema}}'),
    fr: compile('La valeur {{&data}} est supérieure au maximum {{&schema}}'),
    nb: compile('Verdien {{&data}} er større enn maksimalverdi {{&schema}}'),
    'pl-PL': compile('Wartość {{&data}} jest większa niż {{&schema}}'),
    'pl-PT': compile('O valor {{&data}} é maior que o máximo {{&schema}}'),
    'sv-SE': compile('Värdet {{&data}} får inte vara större än {{&schema}}'),
    'zh-CN': compile('数值 {{&data}} 是更大于最大值 {{&schema}}')
  },
  // NUMBER_MULTIPLE_OF
  multipleOf: {
    de: compile('Wert {{&data}} ist kein Vielfaches von {{&schema}}'),
    en: compile('Value {{&data}} is not a multiple of {{&schema}}'),
    fr: compile('La valeur {{&data}} n\'est pas un multiple de {{&schema}}'),
    nb: compile('Verdien {{&data}} er ikke et multiplum av {{&schema}}'),
    'pl-PL': compile('Wartość {{&data}} nie jest wielokrotnością {{&schema}}'),
    'pl-PT': compile('O valor {{&data}} não é um múltiplo de {{&schema}}'),
    'sv-SE': compile('Värdet {{&data}} är inte en multipel av {{&schema}}'),
    'zh-CN': compile('数值 {{&data}} 不是 {{&schema}} 的倍数')
  },
  // NOT_PASSED
  not: {
    de: compile('Daten stimmen mit dem "not" Schema überein'),
    en: compile('Data matches schema from "not"'),
    fr: compile('La donnée correspond au schema de "not"'),
    nb: compile('Data samsvarer med skjema fra "not"'),
    'pl-PL': compile('Dane pasują do wzoru z sekcji "not"'),
    'pl-PT': compile('Os dados correspondem a um esquema de "not"'),
    'sv-SE': compile('Värdet matchar schemat från "not"'),
    'zh-CN': compile('数据不应匹配以下模式 ("not")')
  },
  // OBJECT_REQUIRED
  required: {
    de: compile('Notwendiges Attribut fehlt: {{&dataPath}}'),
    en: compile('Missing required property: {{&dataPath}}'),
    fr: compile('Propriété requise manquante: {{&dataPath}}'),
    nb: compile('Mangler obligatorisk variabel: {{&dataPath}}'),
    'pl-PL': compile('Brakuje wymaganego pola: {{&dataPath}}'),
    'pl-PT': compile('Propriedade necessária em falta: {{&dataPath}}'),
    'sv-SE': compile('Egenskap saknas: {{&dataPath}}'),
    'zh-CN': compile('缺少必要字段: {{&dataPath}}')
  },
  // ENUM_MISMATCH
  enum: {
    de: compile('Notwendiges Attribut fehlt: {{&enumSchema}}'),
    en: compile('No enum match for: {{&enumSchema}}'),
    fr: compile('Aucune valeur correspondante (enum) pour: {{&enumSchema}}'),
    nb: compile('Ingen samsvarende enum verdi for: {{&enumSchema}}'),
    'pl-PL': compile('Żadna predefiniowana wartośc nie pasuje do: {{&enumSchema}}'),
    'pl-PT': compile('Nenhuma correspondência "enum" para: {{&enumSchema}}'),
    'sv-SE': compile('Otillåtet värde: {{&enumSchema}}'),
    'zh-CN': compile('{{&enumSchema}} 不是有效的枚举类型取值')
  },
  // FORMAT_CUSTOM
  format: {
    en: compile('Format validation failed ({{&message}})'),
    fr: compile('Échec de validation du format ({{&message}})'),
    nb: compile('Formatteringen stemmer ikke ({{&message}})'),
    'pl-PL': compile('Błąd zgodności z formatem ({{&message}})'),
    'pl-PT': compile('A validação do formato falhou ({{&message}})'),
    'sv-SE': compile('Misslyckad validering ({{&message}})'),
    'zh-CN': compile('格式校验失败 ({{&message}})')
  },
  // ARRAY_UNIQUE
  uniqueItems: {
    de: compile('Array Einträge nicht eindeutig'),
    en: compile('Array items are not unique'),
    fr: compile('Des éléments du tableau ne sont pas uniques'),
    nb: compile('Elementene er ikke unike'),
    'pl-PL': compile('Elementy tablicy nie są unikalne'),
    'pl-PT': compile('Os itens da "array" não são únicos'),
    'sv-SE': compile('Listvärden är inte unika'),
    'zh-CN': compile('数组元素不唯一')
  },
  // ARRAY_ADDITIONAL_ITEMS
  additionalItems: {
    de: compile('Zusätzliche Einträge nicht erlaubt'),
    en: compile('Additional items not allowed'),
    fr: compile('Éléments additionnels non autorisés'),
    nb: compile('Tillegselementer er ikke tillatt'),
    'pl-PL': compile('Dodatkowe elementy są niedozwolone'),
    'pl-PT': compile('Não são permitidos itens adicionais'),
    'sv-SE': compile('Extra värden är inte tillåtna'),
    'zh-CN': compile('不允许多余的元素')
  },
  // OBJECT_ADDITIONAL_PROPERTIES
  additionalProperties: {
    de: compile('Zusätzliche Attribute nicht erlaubt'),
    en: compile('Additional properties not allowed'),
    fr: compile('Propriétés additionnelles non autorisées'),
    nb: compile('Tilleggsvariabler er ikke tillatt'),
    'pl-PL': compile('Dodatkowe pola są niedozwolone'),
    'pl-PT': compile('Não são permitidas propriedades adicionais'),
    'sv-SE': compile('Extra parametrar är inte tillåtna'),
    'zh-CN': compile('不允许多余的字段')
  },
  // ONE_OF_MISSING
  oneOf: {
    de: compile('Daten stimmen nicht überein mit einem der Schemas von "oneOf"'),
    en: compile('Data does not match any schemas from "oneOf"'),
    fr: compile('La donnée ne correspond à aucun schema de "oneOf"'),
    nb: compile('Data samsvarer ikke med noe skjema fra "oneOf"'),
    'pl-PL': compile('Dane nie pasują do żadnego wzoru z sekcji "oneOf"'),
    'pl-PT': compile('Os dados não correspondem a nenhum esquema de "oneOf"'),
    'sv-SE': compile('Värdet matchar inget av schemana "oneOf"'),
    'zh-CN': compile('数据不符合以下任何一个模式 ("oneOf")')
  },
  // OBJECT_DEPENDENCY_KEY
  dependencies: {
    de: compile('bhängigkeit fehlt - Schlüssel nicht vorhanden'),
    en: compile('Dependency failed - key must exist'),
    fr: compile('Echec de dépendance - la clé doit exister'),
    'pl-PL': compile('Błąd zależności - klucz musi istnieć'),
    'pl-PT': compile('Uma dependência falhou - tem de existir uma chave'),
    'sv-SE': compile('Saknar beroende - saknad nyckel'),
    'zh-CN': compile('依赖失败 - 缺少键')
  }
}
