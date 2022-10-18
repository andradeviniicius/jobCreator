import { FileInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setBenefits } from "../../features/jobDescriptionSlice";

export default function Benefits() {
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
        dispatch(setBenefits(e.target!.result));
        console.log(e.target!.result);
      };
    } else if (file === null) {
      dispatch(setBenefits(""));
      setValue(null);
      return;
    } else {
      dispatch(setBenefits(""));
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
        label="Benefits"
        description="Only .txt files are accepted"
        withAsterisk
        error={error && "Invalid file type"}
        required
      />
    </Stack>
  );
}
