import { z } from 'zod';

const TodoStatusSchema = z.enum(['PENDING', 'IN-PROGRESS', 'COMPLETED'])

const TodoBaseSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    status: TodoStatusSchema
})

export const TodoCreateSchema = TodoBaseSchema.extend({})

export const TodoUpdateSchema = z.object({
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    status: TodoStatusSchema.optional().nullable()
})

export const TodoSchema = TodoBaseSchema.extend({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
})

export type TodoStatus = z.infer<typeof TodoStatusSchema>
export type TodoCreate = z.infer<typeof TodoCreateSchema>
export type TodoUpdate = z.infer<typeof TodoUpdateSchema>
export type Todo = z.infer<typeof TodoSchema>
