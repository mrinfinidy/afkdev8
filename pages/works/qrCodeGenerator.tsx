import { Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Container4k from "../../components/layouts/container";
import { useColorMode } from "@chakra-ui/react";

const Work = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout title="">
      <Container4k>
        <Title>QR Code Pretty</Title>
        <P>
          This project started as a tool I built for work. I needed to create
          company branded QR codes to encode URLs. But the tools i found for my
          package manager didn't allow for much customization. So I tried some
          online qr code generator, which offered fancy design options. When I
          scanned the generated qr code, they led to some random URL that
          expired after a week unless I paid. So I took it upon myself to build
          a simple CLI tool that generates company branded QR codes, which could
          also be integrated into automation workflows. The next step was to
          generalize this tool by adding command options so anyone could
          customize their QR codes easily. That's how QR Code Pretty came to
          life.
        </P>

        {colorMode === "light" ? (
          <WorkImage
            src="/images/works/qrCodeGenerator/qrcodeAfkdev8Light.png"
            alt="YouTube Quick Search Chrome Preview"
          />
        ) : (
          <WorkImage
            src="/images/works/qrCodeGenerator/qrcodeAfkdev8Dark.png"
            alt="YouTube Quick Search Chrome Preview"
          />
        )}
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://chrome.google.com/webstore/detail/youtube-quick-search/algmmcbdjmplgjmligafamelebkahfhh?hl=en"
              target="_blank"
              _focus={{ boxShadow: "none" }}
            >
              Install from Chrome web store <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome browser</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/mrinfinidy/YouTubeSearch"
              target="_blank"
              _focus={{ boxShadow: "none" }}
            >
              Source code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container4k>
    </Layout>
  );
};

export default Work;
