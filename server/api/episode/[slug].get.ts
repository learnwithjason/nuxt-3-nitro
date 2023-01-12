import { z } from 'zod';

const Episode = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  uri: z.string(),
});

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event);
  const data = await $fetch(
    `https://www.learnwithjason.dev/api/v2/episode/${slug}`,
  );

  // TODO handle errors, etc.

  return Episode.parse(data);
});
