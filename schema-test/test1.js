const Ajv = require('ajv');

const schema = {
  type: 'object',
  properties: {
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: [
        {
          type: 'string'
        },
        {
          type: 'number'
        }
      ]
    }
  }
};

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate({
  age: 123,
  pets: ['123', 123]
});
if (!valid) {
  console.log(validate.errors)
}