import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import { ListWrapper } from './style';
interface Props {
  title: string;
  items: {
    substitle: string;
    link?: ReactNode;
    description: string;
  }[];
}
function ListStepper({ title, items }: Props) {
  return (
    <ListWrapper>
      <div className="timeline education">
        <h2 className="timeline-title">{title}</h2>
        <div className="timeline-items">
          {items.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="item-title">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h3>{item.substitle}</h3>
                  {item.link}
                </Stack>
              </div>
              <div className="location">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </ListWrapper>
  );
}

export default ListStepper;
