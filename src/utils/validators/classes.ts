import { Joi } from 'koa-joi-router';

const BodyValidate = Joi.object({
  slug: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  startDate: Joi.date().required(),
});

export default {
  post: {
    body: BodyValidate,
  },
  put: {
    body: BodyValidate,
  },
};
