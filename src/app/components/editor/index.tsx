"use client";
import { useState } from "react";
import Editor from './Editor'

export default function EditorPage() {
  const [data, setData] = useState();

  const savePost = async (body: any) => {
    setData(body);
  };

  return (
    <div className="flex w-full items-center flex-col mt-2">
      <div className="rounded-lg bg-white lg:w-9/12 py-8">
        <Editor data={data} onChange={savePost} holder="editorjs-container" />
      </div>
    </div>
  );
}
