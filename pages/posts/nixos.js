import Layout from "../../components/layouts/article";
import { Title } from "../../components/post";
import P from "../../components/paragraph";
import Container4k from "../../components/layouts/container";
import { Heading } from "@chakra-ui/react";
import { Link, Stack } from "@chakra-ui/react";
import CodeStyled from "../../components/code";

const Nixos = () => {
  return (
    <Layout title="NixOS">
      <Container4k>
        <Title>NixOS</Title>
        <P>
          This is a post about my NixOS setup.
        </P>
        <br />
        <Heading as="h2" fontSize={17}>
          What is NixOS?
        </Heading>
        <P>
          NixOS is a Linux distribution that lets you declaratively write your configurations.
          You can create modules for a specific program and its configuration or separate modules
          based on categories like network, security, etc. That you can easily keep track of all your
          packages and configurations.<br />
          This also makes the system more reproducible. By hosting it on GitHub you can just download the
          Nix config to install it on other machines. And when you want to go back to a previous version,
          you don&#39;t even need to use git. You can just roll back to a previous generation, it&#39;s a
          built-in feature of NixOS.&nbsp;
          <Link
            href="https://www.youtube.com/watch?v=FJVFXsNzYZQ"
            target="_blank"
          >
            Here
          </Link>
          &nbsp;is a more detailed summary video by Fireship.
        </P>
        <br />
        <Heading as="h2" fontSize={17}>
          My NixOS
        </Heading>
        <P>
          Let&#39;s start by looking at my programs and their configurations.
          I use home-manager to manage most of my user applications.
        </P>
        <br />
        <Heading as="h3" fontSize={15}>
          File Manager - Yazi
        </Heading>
        <P>
          Below is a snippet of my home-manager configuration. It import the yazi module,
          where all the yazi related stuff is configured.
        </P>
        <Stack direction='column' spacing={0}>
          <CodeStyled>home-manager.users.bignixy = {'{'} pkgs, ... {'}'}: {'{'}</CodeStyled>
          <CodeStyled mIndent={30}>imports = [</CodeStyled>
          <CodeStyled mIndent={60}>...</CodeStyled>
          <CodeStyled mIndent={60}>(import ./modules/yazi.nix {'{'} inherit pkgs inputs; {'}'} )</CodeStyled>
          <CodeStyled mIndent={30}>];</CodeStyled>
          <CodeStyled mIndent={30}>...</CodeStyled>
          <CodeStyled>{'}'}</CodeStyled>
        </Stack>
        And Here is the yazi modules that&#39;s imported:
        <Stack direction='column' spacing={0}>
          <CodeStyled>{'{'}</CodeStyled>
          <CodeStyled mIndent={30}> home.packages = [</CodeStyled>
          <CodeStyled mIndent={60}>pkgs.fzf</CodeStyled>
          <CodeStyled mIndent={60}>pkgs.ouch</CodeStyled>
          <CodeStyled mIndent={60}>...</CodeStyled>
          <CodeStyled mIndent={30}>];</CodeStyled>
          <CodeStyled mIndent={30}>programs.yazi = {'{'}</CodeStyled>
          <CodeStyled mIndent={30}>{'};'}</CodeStyled>
          <CodeStyled>{'}'}</CodeStyled>
        </Stack>
        <P>
          First I declare the dependencies like fzf and ouch, that my Yazi plugins use. Isn&#39;t this great?
          If you forget why e.g. ouch is installed on your system, you can just look it up in you configuration.
          <br />
          The rest is all configurations for Yazi.
        </P>
      </Container4k>
    </Layout>
  );
}

export default Nixos;
