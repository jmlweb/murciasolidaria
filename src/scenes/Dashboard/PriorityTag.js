import React, { memo } from 'react';
import { Tag } from '@chakra-ui/core';
import { propOr } from 'ramda';
import PT from 'prop-types';

import { PRIORITIES } from '../../constants';

const PriorityTag = ({ priority }) => {
  const properPriority = propOr(PRIORITIES.mid, priority, PRIORITIES);
  return (
    <Tag size="sm" variantColor={properPriority.color}>
      {properPriority.label}
    </Tag>
  );
};

PriorityTag.defaultProps = {
  priority: undefined,
};

PriorityTag.propTypes = {
  priority: PT.oneOf(Object.keys(PRIORITIES)),
};

export default memo(PriorityTag);
