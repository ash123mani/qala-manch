import S from 'fluent-json-schema';

const response = S.object()
  .prop('result', S.string().required())
  .prop('isNewUser', S.boolean());

const schema = {
  ping: {
    response: {
      200: response
    }
  }
};

export default schema;