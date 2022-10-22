import { FileInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useUserFormContext } from "../../app/form-context";

export default function CoreCompetence() {
  const form = useUserFormContext();
  const [file, setFile] = useState<File | null>(null);
  function convertFileToText(file: File) {
    if (file && file.type === "text/plain") {
      var reader = new FileReader();
      setFile(file);

      reader.onload = (e) => {
        form.setFieldValue("aboutValtech", reader.result);
      };
      reader.readAsText(file);
    } else {
      setFile(null);
      form.setFieldValue("coreCompetence", null);
    }
  }
  return (
    <Stack>
      <FileInput
        accept="text/plain"
        placeholder="Pick a file"
        label="About Valtech"
        description="Only .txt files are accepted"
        withAsterisk
        {...form.getInputProps("aboutValtech")}
        onChange={convertFileToText}
        value={file}
      />
    </Stack>
  );
}
