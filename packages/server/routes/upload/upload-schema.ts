import S from 'fluent-json-schema';

const successImageUpload = S.object()
  .prop('fieldname', S.string().required())
  .prop('originalname', S.string().required())
  .prop('encoding', S.string())
  .prop('mimetype', S.string())
  .prop('path', S.string().required())
  .prop('size', S.number())
  .prop('filename', S.string());

const successImagesUpload = S.object().prop('fileds', S.array().items(successImageUpload).required());

const schema = {
  image: {
    response: {
      200: successImageUpload,
    },
  },
  images: {
    response: {
      200: successImagesUpload,
    },
  },
};

export default schema;
