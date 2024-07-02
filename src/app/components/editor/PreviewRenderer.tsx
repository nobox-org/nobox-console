import editorJsHtml from "editorjs-html";
const EditorJsToHtml = editorJsHtml();

export default function PreviewRenderer({ data }: any) {
  const html = EditorJsToHtml.parse(data);
  return (
    <div className="prose max-w-full" key={data.time}>
      {html.map((item, index) => {
          return <div dangerouslySetInnerHTML={{__html: item}} key={index}></div>
      })}
    </div>
  );
};