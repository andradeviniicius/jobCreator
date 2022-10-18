import ReactMarkdown from "react-markdown";

export default function Preview() {

  return (
    <>
      <ReactMarkdown>
        {`# ${'jobTitle'}
        ## About Valtech 
        ## Summary 
        ### About the Role ${`job.description`}
        ### Responsibilities $
        ### Requirements 
        ### Extra 
        ### Benefits 
        ## Here’s a little about work here We embrace all
        things digital. - We talk to each other. - We have fun. - We love our
        clients.`
        }
      </ReactMarkdown>
    </>
  );
}
