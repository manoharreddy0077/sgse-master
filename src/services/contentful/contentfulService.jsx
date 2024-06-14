import { createClient } from "contentful";

export const client = createClient({
  space: "a3py13baxplt",
  environment: "master", // defaults to 'master' if not set
  accessToken: "lLR8xs6lESNwtcxSWJHbIavJ1G2MMdKhENO8MPykiyw",
  // space: "lv0u6rgaph7x",
  // accessToken: "uYN0zsQ8Zy4mq-diwfFSyLassSHeyiUCyVAQMOiSlwA",
});

export const getContent = async (contentType) => {
  try {
    const posts = await client.getEntries({
      content_type: contentType,
    });

    const entries = posts.items.map((post) => {
      post = post.fields;
      // console.log(post);
      return post;
    });
    return entries;
  } catch (error) {
    console.error(error);
  }
};
