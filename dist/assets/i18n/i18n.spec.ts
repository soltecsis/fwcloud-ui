/** If true, will fail if any of the language files has an empty key (default: false) */
const CONSIDER_EMPTY_STRINGS_AS_MISSING = false;

/**
 * Traverses a JSON object and returns an array of all its keys, joined by '.'. F.i. TITLE, MENU.LABELS.0, MENU.LABELS.1, etc
 * 
 * @param obj Object to traverse
 * @param path Previous keys, when called recursively
 */
function getObjKeys(obj: any, path?: string): string[] {
  let ret: string[] = [];

  if(obj && typeof obj === 'object') {
    for(let key in obj) {
      if(obj[key] && typeof obj[key] === 'object') {
        ret.push(...getObjKeys(obj[key], path ? path+'.'+key : key));
      } else {
        ret.push(path ? path+'.'+key : key);
      }
    }
  }

  return ret;
}

/**
 * Given an array of keys, traverses a JSON object and find if any of them is not present, returning an array of missing keys
 * 
 * @param obj Object to traverse
 * @param keys Array of dotted separated keys to check
 */
function findMissingKeys(obj: any, keys: string[]): string[] {
  let missingKeys: string[] = [];

  keys.forEach((key) => {
    let jsonKeys = key.split('.');
    
    let objKeyValue = getObjValue(obj, jsonKeys);

    if((CONSIDER_EMPTY_STRINGS_AS_MISSING && objKeyValue === "") || objKeyValue === null || objKeyValue === undefined) {
      missingKeys.push(key);
    }
  });

  return missingKeys;
}

/**
 * Traverses a JSON object to find the nested key and returns its value
 * 
 * @param obj JSON object
 * @param keys Array of keys
 */
function getObjValue(obj: any, keys: string[]): any {
  if(!keys)
    return null;

  let key = keys.shift();

  if(obj[key] && typeof obj[key] === 'object') {
    return getObjValue(obj[key], keys);
  } else {
      return obj[key];
  }
}

fdescribe("i18n language files tests", () => {
  // Global app translations
  let appEs: any;
  let appEn: any;
  // Panels translations
  let panelsEs: any;
  let panelsEn: any;
  // Wizards translations
  let wizardsEs: any;
  let wizardsEn: any;

  beforeEach(() => {
    appEs = require('./app/es.json');
    appEn = require('./app/en.json');

    panelsEs = require('./panels/es.json');
    panelsEn = require('./panels/en.json');

    wizardsEs = require('./wizards/es.json');
    wizardsEn = require('./wizards/en.json');
  });

  it('should find and parse JSON files correctly', () => {
    expect(appEs).toBeTruthy();
    expect(appEn).toBeTruthy();

    expect(panelsEs).toBeTruthy();
    expect(panelsEn).toBeTruthy();

    expect(wizardsEs).toBeTruthy();
    expect(wizardsEn).toBeTruthy();
  });

  it('should have the same keys for all language files', () => {
    // Global app translations
    let keysEs = getObjKeys(appEs);
    let keysEn = getObjKeys(appEn);
        
    expect(findMissingKeys(appEn, keysEs)).toEqual([]);
    expect(findMissingKeys(appEs, keysEn)).toEqual([]);

    // Panels translations
    keysEs = getObjKeys(panelsEs);
    keysEn = getObjKeys(panelsEn);
        
    expect(findMissingKeys(panelsEn, keysEs)).toEqual([]);
    expect(findMissingKeys(panelsEs, keysEn)).toEqual([]);

    // Wizards translations
    keysEs = getObjKeys(wizardsEs);
    keysEn = getObjKeys(wizardsEn);
        
    expect(findMissingKeys(wizardsEn, keysEs)).toEqual([]);
    expect(findMissingKeys(wizardsEs, keysEn)).toEqual([]);
  });
});