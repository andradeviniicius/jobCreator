import { Text, Title } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../../types/FormValues";

export default function Preview({
  form,
}: {
  form: UseFormReturnType<FormValues, any>;
}) {
  return (
    <>
      {!form.values.jobTitle ? (
        <p>Start filling the inputs to the left to see your document :)</p>
      ) : (
        <>
          <Title order={2}>Join Valtech</Title>
          {form.values.jobTitle}

          {form.values.benefits && (
            <>
              <Title order={3}>What we are looking for</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${form.values.benefits}`}</Text>
            </>
          )}
          {form.values.coreCompetence && (
            <>
              <Title order={3}>What you will do</Title>
              <ul>
                {form.values.coreCompetence.map((e, i) => {
                  return (
                    <>
                      <li key={i}>
                        <Text style={{ whiteSpace: "pre-wrap" }}>{e}</Text>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          )}

          {form.values.coreCompetence && (
            <>
              <Title order={3}>What you should have</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${form.values.coreCompetence.join("\n")}`}</Text>
            </>
          )}

          {form.values.specificCompetence && (
            <>
              <Title order={3}>What will make you thrive</Title>
              <ul>
                {form.values.specificCompetence.map((e, i) => {
                  return (
                    <>
                      <li key={i}>
                        <Text style={{ whiteSpace: "pre-wrap" }}>{e}</Text>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          )}

          {form.values.aboutValtech && (
            <>
              <Title order={3}>Here is a little about us:</Title>
              <Text
                style={{ whiteSpace: "pre-wrap" }}
              >{`${form.values.aboutValtech}`}</Text>
            </>
          )}
        </>
      )}
    </>
  );
}
