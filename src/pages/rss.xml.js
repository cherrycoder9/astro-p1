import { getCollection } from 'astro:content';
// src/pages/rss.xml.js
import rss from '@astrojs/rss';

export async function GET(context) {
  const allPosts = await getCollection("blog");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}