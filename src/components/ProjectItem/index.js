import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

import { Box, Title, Icon, List, Chip, Summary } from './styles';

const ProjectItem = ({ name, summary, tags, source, preview }) => (
  <Box width="100%" m="0 0 1.8em 0">
    <Title>
      {name}
      {source && (
        <Icon href={source} target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faGithub} size="1x" color="#787878" />
        </Icon>
      )}
      {preview && (
        <Icon href={preview} target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faLink} size="1x" color="#787878" />
        </Icon>
      )}
    </Title>

    <List>
      {tags.map(({ color, label }) => (
        <Chip key={label} bg={color}>
          {label}
        </Chip>
      ))}
    </List>
    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
  </Box>
);

export default ProjectItem;
