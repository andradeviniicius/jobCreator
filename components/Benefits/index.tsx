import { FileInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useUserFormContext } from "../../app/form-context";

export default function Benefits() {
  const [file, setFile] = useState<File | null>(null);
  const form = useUserFormContext();

  function convertFileToText(file: File) {
    if (file && file.type === "text/plain") {
      var reader = new FileReader();
      setFile(file);

      reader.onload = (e) => {
        form.setFieldValue("benefits", reader.result);
      };
      reader.readAsText(file);
    } else {
      setFile(null);
      form.setFieldValue("benefits", null);
    }
  }
  return (
    <Stack>
      <FileInput
        accept="text/plain"
        label="Benefits"
        placeholder="Pick a file"
        description="Only .txt files are accepted"
        withAsterisk
        required
        {...form.getInputProps("benefits")}
        value={file}
        onChange={convertFileToText}
      />
    </Stack>
  );
}
