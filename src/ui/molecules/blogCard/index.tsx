import React from 'react';
import Moment from 'moment';
import { IBlog } from '../../../interface/blog';
import { BlogCardWrapper } from './style';

function BlogCard({
  description,
  title,
  published_timestamp,
  canonical_url,
}: IBlog) {
  const formatDate = Moment(published_timestamp).format('MMM Do YYYY');
  return (
    <a href={`${canonical_url}`}>
      <BlogCardWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="timeformat">{formatDate}</p>
      </BlogCardWrapper>
    </a>
  );
}

export default BlogCard;
