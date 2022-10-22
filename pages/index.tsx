import { AppShell, Button, Navbar, Stack, TextInput } from "@mantine/core";
import type { NextPage } from "next";
import { UserFormProvider, useUserForm } from "../app/form-context";
import {
  AboutValtech,
  Benefits,
  CoreCompetence,
  Preview,
  SpecificCompetence,
} from "../components";
import { createWord } from "../utils/createWord";

const Home: NextPage = () => {
  const form = useUserForm({
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      benefits: null,
      coreCompetence: null,
      specificCompetence: null,
      aboutValtech: "",
    },
    validate: {
      jobTitle: (value) => (value.length < 1 ? "Invalid jobTitle" : null),
      benefits: (value: any) =>
        !value || value.type === "text/plain" ? "Wrong file type" : null,
      coreCompetence: (value: any) => (!value ? "Wrong file type" : null),
      aboutValtech: (value: any) => (!value ? "Wrong file type" : null),
    },
  });

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <UserFormProvider form={form}>
            <form
              onSubmit={form.onSubmit((e) => {
                createWord(form.values);
              })}
            >
              <Stack>
                <TextInput
                  placeholder="Insert a job name"
                  label="Job Title"
                  withAsterisk
                  {...form.getInputProps("jobTitle")}
                />
                <Benefits />
                <CoreCompetence />
                <SpecificCompetence />
                <AboutValtech />
                <Button type="submit">Download File</Button>
              </Stack>
            </form>
          </UserFormProvider>
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
      <Preview form={form} />
    </AppShell>
  );
};

export default Home;
