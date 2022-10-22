import { FileInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useUserFormContext } from "../../app/form-context";

export default function SpecificCompetence() {
  const form = useUserFormContext();
  const [file, setFile] = useState<File | null>(null);

  function convertFileToText(file: File) {
    if (file && file.type === "text/plain") {
      var reader = new FileReader();
      setFile(file);

      reader.onload = (e) => {
        form.setFieldValue("specificCompetence", reader.result!.split(/\r?\n/));
      };
      reader.readAsText(file);
    } else {
      setFile(null);
      form.setFieldValue("specificCompetence", null);
    }
  }
  return (
    <Stack>
      <FileInput
        accept="text/plain"
        placeholder="Pick a file"
        label="Specific Competence"
        description="Only .txt files are accepted"
        {...form.getInputProps("specificCompetence")}
        onChange={convertFileToText}
        value={file}
      />
    </Stack>
  );
}
