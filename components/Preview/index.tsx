import ReactMarkdown from "react-markdown";
import { useAppSelector } from "../../app/hooks";

export default function Preview() {
  const {aboutValtech, benefits, coreCompetence,jobTitle,specificCompetence} = useAppSelector((state) => state.jobData);

  const job = 
  `
  ## Join Valtech 
  ${jobTitle} 
  ## What we are looking for:
  ${benefits} 
  ### What you will do
  ${coreCompetence}
  ### What you should have
  ${coreCompetence}
  ### What will make you thrive:
  ${specificCompetence}
  ## Here’s a little about us
  ${aboutValtech}
  
  `;
    
  return (
    <>
      <ReactMarkdown>{job}</ReactMarkdown>
    </>
  );
}
