import { useState } from 'react';
import { Container, Group, Stack, Title, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSimple(props) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Drawer position="right" opened={opened} onClose={toggle} title="Authentication">
        {/* Drawer content */}
        <Stack gap={5}>
          {items}
        </Stack>
      </Drawer>
      <header className={classes.header}>
        <Container size="sm" className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Title>App</Title>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <Burger position="right" opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      {props.children}
    </>
  );
}