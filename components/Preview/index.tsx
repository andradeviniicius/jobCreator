import { Text, Title } from "@mantine/core";
import { useAppSelector } from "../../app/hooks";

export default function Preview() {
  const {
    aboutValtech,
    benefits,
    coreCompetence,
    jobTitle,
    specificCompetence,
  } = useAppSelector((state) => state.jobData);
  return (
    <>
      {!jobTitle ? (
        <p>Start filling the inputs to the left to see your document :)</p>
      ) : (
        <>
          <Title order={2}>Join Valtech</Title>
          {jobTitle}

          {benefits && (
            <>
              <Title order={3}>What we are looking for</Title>
              <Text style={{ whiteSpace: "pre-wrap" }}>{`${benefits}`}</Text>
            </>
          )}
          {coreCompetence && (
            <>
              <Title order={3}>What you will do</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${coreCompetence.join('\n')}`}</Text>
            </>
          )}

          {coreCompetence && (
            <>
              <Title order={3}>What you should have</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${coreCompetence.join('\n')}`}</Text>
            </>
          )}

          {specificCompetence && (
            <>
              <Title order={3}>What will make you thrive</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${specificCompetence.join('\n')}`}</Text>
            </>
          )}

          {aboutValtech && (
            <>
              <Title order={3}>Here is a little about us:</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${aboutValtech}`}</Text>
            </>
          )}
        </>
      )}
    </>
  );
}
