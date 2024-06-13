import React, {useEffect, useRef} from "react";
import EditorJS from "@editorjs/editorjs";
import {EDITOR_TOOLS} from "./EditorTools";

export default function Editor({ value, onChange, id }: any) {
  //add a reference to editor
  const ref = useRef<any>();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      ref.current = new EditorJS({
        holder: id,
        tools: EDITOR_TOOLS,
        data: value,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (<div id={id} className="prose max-w-full overflow-auto bg-white px-5 py-5 noboxeditor"> </div>);
};