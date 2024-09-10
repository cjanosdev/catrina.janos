import * as React from 'react';
import MuiLink from '@mui/material/Link';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps extends React.ComponentProps<typeof MuiLink> {
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const { to, ...other } = props;
  return <MuiLink component={GatsbyLink} ref={ref} to={to} {...other} />;
});

export default Link;
