import { Container, Link, Heading, Stack } from '@chakra-ui/react'
import { Title } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import CodeStyled from '../../components/code'
import { WorkImage } from '../../components/work'

const FakeNativeApp = () => {
  return (
    <Layout title=''>
      <Container>
        <Title>&quot;Fake&quot; Native App</Title>
        <P>
          Do you use Discord? Or Microsoft Teams? Or maybe Spotify?
          <br />
          If you use any of these applications on linux, chances are high that you have been annoyed
          by any of these programs. 
          <br />
          &bull; You&apos;re about to have a call on Discord and suddenly it tells you that you need to update the app.
          It directs you to their website where you have to download the latest release, manually unpack it and
          run the installer.
          <br />
          &bull; Maybe your team uses Teams for meetings. But everytime you interact with it you are reminded that
          Microsoft doesn&apos;t care about the linux UX.
          I for one have had the experience that half of the time when I launch Teams the chat window is blank.
          <br />
          &bull; And Spotify wouldn't even build on my Gentoo partition...
        </P>
        <br />
        <P>
          But I&apos;m not here to complain, there is an incredibly simple solution to this.
          Are you thinking about&nbsp;
          <Link href="https://github.com/nativefier/nativefier" target="_blankk" _focus={{ borderShadow: 'none' }}>Nativefier </Link>
          right now? Even better, just use Firefox!
          <br />
          This way you don&apos;t need to install any additional program (ofc you already use Firefox right?)
          and don't need to worry about updates. And you won't see a visual difference to the nativefier version.
          No title bar, no address bar, no tabs. Just the app.
          Let me show you how to do it.
        </P>
        <br />
        <WorkImage src='/images/posts/fake-native-app/spotify-window.png' />
        <P>
          <Heading as="h3" fontSize={14}>Spotify running in &quot;barless&quot; Firefox window</Heading>
          <br />
          <b>Step 1:</b> Enter <CodeStyled>about:profiles&nbsp;</CodeStyled> in the address bar
          and create a new profile. You can name it &quot;barless-window&quot; for example. We are going to use this profile for all webapp instances.
          <br />
          <b>Step 2:</b> Enable userChrome for this profile.
          Launch a Firefox instance with this profile. Enter <CodeStyled>about:config&nbsp;</CodeStyled>
          and set
          <br />
          <CodeStyled>toolkit.legacyUserProfileCustomizations.stylesheets&nbsp;</CodeStyled>
          <br />
          to true.
          <br />
          <b>Step 3:</b> Open this profile's root directory (the path is displayed on the about:profile page),
          create a direcotry named &quot;chrome&quot; and a file named &quot;userChrome.css&quot; inside it.
          <br />
          <b>Step 4:</b> Paste the following code into the userChrome.css file:
          <Stack>
            <CodeStyled>
              /*
               * Do not remove the @namespace line -- it's required for correct functioning
               */
              <br />
              @namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"); /* set default namespace to XUL */
              <br />
              /*
               * Hide tab bar, navigation bar and scrollbars
               * !important may be added to force override, but not necessary
               * #content is not necessary to hide scroll bars
               */
              <br />
              <br />
              #TabsToolbar &#123;visibility: collapse;&#125;
              <br />
              #navigator-toolbox &#123;visibility: collapse;&#125;
              <br />
              browser &#123;margin-right: -14px; margin-bottom: -14px;&#125;
            </CodeStyled>
          </Stack>
          <b>Step 5:</b> Launch a new Firefox instance with this profile and open the webapp you want to use:
          <br />
          <CodeStyled>firefox-bin --new-window -P &lt;profile name&gt; &lt;url&gt;&nbsp;</CodeStyled>
        </P>
        <WorkImage src='/images/posts/fake-native-app/spotify-screen.png' />
        <P>
          This is my &quot;fake&quot; Spotify running next to a Terminal window.
        </P>
        <WorkImage src='/images/posts/fake-native-app/discord-screen-blurred.png' />
        <P>
          Any webapp can be run this way, here is Discord.
          <br />
          <br />
          Have fun with your own &quot;fake&quot; native apps!
        </P>
      </Container>
    </Layout>
  )
}

export default FakeNativeApp
