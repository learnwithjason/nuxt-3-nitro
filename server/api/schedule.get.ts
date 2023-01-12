import { z } from 'zod';

const Episodes = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
);

export default defineEventHandler(async () => {
  const data = await $fetch('https://www.learnwithjason.dev/api/v2/schedule');

  // TODO handle errors, etc.

  return Episodes.parse(data);
});
