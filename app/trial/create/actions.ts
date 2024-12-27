// 'use server';
// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { IFormState } from '@app/trial/types';

// const FormSchema = z.object({
//   id: z.string(),
//   name: z.string({
//     required_error: 'Please input name.',
//   }),
//   start_at: z.string({
//     required_error: 'Please input name.',
//   }),
//   ends_on: z.string({
//     required_error: 'Please input name.',
//   }),
//   judge_id: z.string({
//     required_error: 'Please input name.',
//   }),
//   description: z.string().nullable() || null,
// });

// const CreateTrial = FormSchema.omit({ id: true });

// export const createTrial = async (
//   state: IFormState,
//   formData: FormData
// ): Promise<IFormState> => {
//   const validatedFields = CreateTrial.safeParse({
//     name: formData.get('name'),
//     start_at: formData.get('start_at'),
//     ends_on: formData.get('ends_on'),
//     judge_id: formData.get('judge_id'),
//     description: formData.get('description'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Create Invoice.',
//     };
//   }
//   // Prepare data for insertion into the database
//   const { name, start_at, ends_on, judge_id, description } =
//     validatedFields.data;

//   try {
//     await sql`
//       INSERT INTO trials (name, start_at, ends_on, judge_id, description)
//       VALUES (${name}, ${start_at}, ${ends_on}, ${judge_id}, ${description})
//     `;
//     revalidatePath('/trial');
//     redirect('/trial');
//   } catch (error) {
//     console.error('Database error:', error);
//     return {
//       errors: {},
//       message: 'Ошибка создания записи',
//     };
//   }
// };
