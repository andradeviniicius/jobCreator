import createReport from "docx-templates";
// @ts-ignore
const downloadURL = (data, fileName) => {
  const a = document.createElement("a");
  a.href = data;
  a.download = fileName;
  document.body.appendChild(a);
  // @ts-ignore
  a.style = "display: none";
  a.click();
  a.remove();
};
// @ts-ignore
const saveDataToFile = (data, fileName, mimeType) => {
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  // @ts-ignore
  downloadURL(url, fileName, mimeType);
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
  }, 1000);
};

export const createWord = async (data: any) => {
  const template = (await fetch("./template.docx").then((res) =>
    res.arrayBuffer()
  )) as Buffer;
  const report = await createReport({
    template,
    data: data,
  });
  saveDataToFile(
    report,
    "report.docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
};
