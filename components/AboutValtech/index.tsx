import { FileInput, Stack, Title } from "@mantine/core";
import { useState } from "react";

export default function AboutValtech() {
  const [value, setValue] = useState<File | null>(null);
  const [error, setError] = useState(false);

  function checkFileType(file: File) {
    if (file.type === "text/plain") {
      setError(false);
      setValue(file);
    } else {
      setValue(null);
      setError(true);
    }
  }

  return (
    <Stack>
      <FileInput
        accept="text/plain"
        value={value}
        onChange={checkFileType}
        placeholder="Pick a file"
        label="About Valtech"
        description="Only .txt files are accepted"
        withAsterisk
        error={error && "Invalid file type"}
        required
      />
    </Stack>
  );
}
