import { FileInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setCoreCompetence } from "../../features/jobDescriptionSlice";

export default function CoreCompetence() {
  const [value, setValue] = useState<File | null>(null);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  function checkFileType(file: File) {
    if (file && file.type === "text/plain") {
      setError(false);
      setValue(file);

      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (e) {
        dispatch(setCoreCompetence(e.target!.result));
        console.log(e.target!.result);
      };
    } else if (file === null) {
      dispatch(setCoreCompetence(""));
      setValue(null);
      return;
    } else {
      dispatch(setCoreCompetence(""));
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
        label="Core Competence"
        description="Only .txt files are accepted"
        withAsterisk
        error={error && "Invalid file type"}
        required
      />
    </Stack>
  );
}
