import { AppShell, Burger, Group, Container, Box, Title, Drawer, Stack, ActionIcon, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './AppLayout.module.css';
import { NavLink, Outlet, Navigate } from 'react-router-dom';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];


export function AppLayout() {
  const [opened, { open, close }] = useDisclosure();

  function navigateHome() {

  }

  const items = links.map((link) => (
    <NavLink 
      to={link.link} 
      className={(navdata) => navdata.isActive ? classes.link + ' ' + classes.activelink : classes.link} 
      key={link.label}
      onClick={close}>
        {link.label}
    </NavLink>
  ));

  const loginLink = <NavLink to="login" className={classes.link}>Login / Signup</NavLink>;

  return (
    <AppShell header={{ height: {base:60, sm: 60, lg: 76 }}} >

      <Drawer position="right" opened={opened} onClose={close}
        title={"Authentication"} 
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
        <Stack gap={5}>
          {items}
        </Stack>
        <Stack>
          {loginLink}
        </Stack>
      </Drawer>

      <AppShell.Header>
        <Container size="sm" className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          {/* <NavLink to="/"> */}

            <Title>App</Title>
          {/* </NavLink> */}
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <Group visibleFrom="xs">
            {loginLink}
          </Group>

          <Burger position="right" opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Box pt={12} pb={{base:144, sm: 84, lg: 84 }} px={4}>
          <Outlet />
        </Box>
      </AppShell.Main>

      <AppShell.Footer p={8} className={classes.footinner}>

        {/* <MantineLogo size={28} /> */}
        <Title order={2}>App</Title>

        <Group>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>

      </AppShell.Footer>

    </AppShell>
  );
}