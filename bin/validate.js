const Ajv = require('ajv');
const fs = require('fs');

const files = [
    ['syntaxes/qll.tmLanguage.json', 'schemas/tmlanguage.json'],
    ['syntaxes/qasm.tmLanguage.json', 'schemas/tmlanguage.json'],
];

let failed = false;
for (const [file, schemaFile] of files) {
    const ajv = new Ajv({ allowUnionTypes: true, strict: false });
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));

    // Remove schema $id to avoid caching issues
    delete schema.id;
    delete schema.$id;

    const validate = ajv.compile(schema);
    if (validate(data)) {
        console.log(`${file} valid`);
    } else {
        console.error(`${file} invalid:`, validate.errors);
        failed = true;
    }
}

process.exit(failed ? 1 : 0);
