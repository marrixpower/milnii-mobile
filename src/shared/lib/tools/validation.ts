import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'

import { ZodRawShape, z } from 'zod'

export type TSchema<TSchemaType extends z.ZodTypeAny> = z.infer<TSchemaType>

export const getSchemas = (t: TFunction) => ({
  email: z
    .string({
      required_error: t('validation.required'),
    })
    .email({ message: t('validation.email') }),

  password: z
    .string({ required_error: t('validation.required') })
    .min(6, t('validation.password')),

  photo: z.string().min(1, t('validation.required')),

  fullName: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 1 }))
    .max(
      255,
      t('validation.max', {
        value: 255,
      }),
    ),

  optionalString: z.string().optional().or(z.literal('')),
  requiredString: z
    .string({
      required_error: t('validation.required'),
    })
    .min(2, t('validation.required')),
  requiredNumber: z
    .number({
      required_error: t('validation.required'),
    })
    .min(0, t('validation.min', { value: 0 })),

  textArea: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 1 }))
    .max(
      500,
      t('validation.max', {
        value: 500,
      }),
    ),

  code: z
    .string({
      required_error: t('validation.required'),
    })
    .min(1, t('validation.min', { value: 6 })),

  arrayString: z.array(
    z.string({
      required_error: t('validation.required'),
    }),
  ),

  optionalObject: z
    .object({
      key: z.string(),
      title: z.string(),
      _id: z.string().optional(),
    })
    .optional(),

  requiredObject: z
    .object({
      key: z.string(),
      title: z.string(),
    })
    .required(),

  requiredObjectWithId: z
    .object({
      key: z.string(),
      title: z.string(),
      _id: z.string().optional(),
    })
    .required(),

  arrayObject: z
    .array(
      z.object({
        key: z.string(),
        title: z.string(),
      }),
    )
    .min(1, t('validation.required')),

  boolean: z.boolean(),
  arrayPhotos: z
    .array(
      z.object({
        user: z.string().optional(),
        _id: z.string(),
        photo: z.string(),
      }),
    )
    .min(1, t('validation.required')),
})

export const validationSchema = (
  cb: (schemas: ReturnType<typeof getSchemas>, t: TFunction) => ZodRawShape,
) => {
  return (t: TFunction) => {
    const schemas = getSchemas(t)
    const schema = cb(schemas, t)

    return zodResolver(z.object(schema))
  }
}
