'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { StateTrial } from '@app/lib/types';

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: 'Please input name.',
  }),
  start_at: z.string({
    required_error: 'Please input name.',
  }),
  ends_on: z.string({
    required_error: 'Please input name.',
  }),
  judge_id: z.string({
    required_error: 'Please input name.',
  }),
  description: z.string().nullable() || null
});

const CreateTrial = FormSchema.omit({ id: true});

export const createTrial = async(prevState: StateTrial, formData: FormData) => {
  const validatedFields = CreateTrial.safeParse({
    name: formData.get('name'),
    start_at: formData.get('start_at'),
    ends_on: formData.get('ends_on'),
    judge_id: formData.get('judge_id'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  // Prepare data for insertion into the database
  const { name, start_at, ends_on, judge_id, description} = validatedFields.data;
  console.log(`name: ${name}, start_at: ${start_at}, ends_on: ${ends_on}, judge_id: ${judge_id}, description: ${description}`)
 
  try {
    await sql`
      INSERT INTO trials (name, start_at, ends_on, judge_id, description)
      VALUES (${name}, ${start_at}, ${ends_on}, ${judge_id}, ${description})
    `;
  }catch(error){
    return{message: 'Failed to create invoices.'};
  }
  
  revalidatePath('/trial');
  redirect('/trial');

  (async () => {
    try {
      const result = await sql`SELECT 1`;
      console.log('Connection successful:', result);
    } catch (error) {
      console.error('Database connection error:', error);
    }
  })();

}
