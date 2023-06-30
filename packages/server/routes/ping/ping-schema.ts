import S from 'fluent-json-schema';

const response = S.object()
  .prop('result', S.string().required())

const schema = {
  ping: {
    response: {
      200: response
    }
  }
}

console.log("schema", schema)

export default schema