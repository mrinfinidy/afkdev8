import {
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Container4k from "../../components/layouts/container";
import { GridItem } from "../../components/grid-item";
import qrCodeLight from "../../public/images/works/qrCodeGenerator/qrcodeAfkdev8Light.png";
import qrCodeDark from "../../public/images/works/qrCodeGenerator/qrcodeAfkdev8Dark.png";
import qrCodeCat from "../../public/images/works/qrCodeGenerator/qrcodeCat.png";

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

        <SimpleGrid columns={[1, 1, 2]} gap={6} my={4}>
          {colorMode === "light" ? (
            <GridItem
              title="afkdev8"
              thumbnail={qrCodeLight}
              href="/images/works/qrCodeGenerator/qrcodeAfkdev8Light.png"
            ></GridItem>
          ) : (
            <GridItem
              title="afkdev8"
              thumbnail={qrCodeDark}
              href="/images/works/qrCodeGenerator/qrcodeAfkdev8Dark.png"
            ></GridItem>
          )}
          <GridItem
            title="Cat"
            thumbnail={qrCodeCat}
            href="/images/works/qrCodeGenerator/qrcodeCat.png"
          ></GridItem>
        </SimpleGrid>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux, macOS, Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/mrinfinidy/qrcode-pretty"
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
