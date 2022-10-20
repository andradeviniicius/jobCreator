import { AppShell, Button, Navbar, Stack, TextInput } from "@mantine/core";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  AboutValtech,
  Benefits,
  CoreCompetence,
  Preview,
  SpecificCompetence,
} from "../components";
import { setJobTitle } from "../features/jobDescriptionSlice";
import { createWord } from "../utils/createWord";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector((state) => state.jobData);

  function downloadWord() {
    createWord(reduxData);
  }

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Stack>
            <TextInput
              placeholder=""
              label="Job Title"
              withAsterisk
              onChange={(e) => dispatch(setJobTitle(e.target.value))}
            />
            <Benefits />
            <CoreCompetence />
            <SpecificCompetence />  
            <AboutValtech />
            <Button onClick={downloadWord}>Download File</Button>
          </Stack>
        </Navbar>
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
      <Preview />
    </AppShell>
  );
};

export default Home;
