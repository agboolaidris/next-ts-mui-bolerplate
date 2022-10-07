export interface IBlog {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null | string;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: null | string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  //   user: {
  //     name: 'Agboola Ishola Idris';
  //     username: 'agboolaidris';
  //     twitter_username: null;
  //     github_username: 'agboolaidris';
  //     user_id: 543121;
  //     website_url: 'https://agboolaidris.github.io';
  //     profile_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3SG7yWOi--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/543121/68bbc941-dc97-421b-9b86-d1b17006b52d.jpeg';
  //     profile_image_90: 'https://res.cloudinary.com/practicaldev/image/fetch/s--aZGtZXnO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/543121/68bbc941-dc97-421b-9b86-d1b17006b52d.jpeg';
  //   };
}
