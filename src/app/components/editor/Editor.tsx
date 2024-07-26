import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";

export default function Editor({ value, onChange, id }: any) {
  const ref = useRef<any>();

  useEffect(() => {
    if (!ref.current) {
      ref.current = new EditorJS({
        holder: id,
        tools: EDITOR_TOOLS,
        data: value,
        async onChange(api, _event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (<div id={id} ref={ref} className="w-full bg-white overflow-auto px-10 py-5 editorjs-container"> </div>);
};