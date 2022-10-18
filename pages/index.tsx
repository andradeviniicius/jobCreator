import {
  AppShell,
  Button,
  Footer,
  Group,
  Header,
  Navbar,
  TextInput,
} from "@mantine/core";
import type { NextPage } from "next";
import {
  AboutValtech,
  Benefits,
  CoreCompetence,
  Preview,
  SpecificCompetence,
} from "../components";

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <TextInput
            placeholder=""
            label="Job Title"
            withAsterisk
            onChange={(e) =>
              console.log("Apply jobTitle to the whole docx state")
            }
          />
          <Benefits />
          <CoreCompetence />
          <SpecificCompetence />
          <AboutValtech />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <Group position="right">
            <Button
              onClick={() => console.log("Group all files in a single docx")}
            >
              Download File
            </Button>
          </Group>
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Preview></Preview>
    </AppShell>
  );
};

export default Home;
