const fields = [
    {
        "_id": "667b4ecf41e5f398476fd7be",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "required": true,
        "unique": false,
        "description": "Title of the blog",
        "comment": "",
        "hashed": false,
        "type": "ARRAY",
        "slug": "title",
        "name": "title",
        "createdAt": "2024-06-25T23:12:15.521Z",
        "updatedAt": "2024-06-27T12:16:07.661Z"
    },
    {
        "_id": "667b4ecf41e5f398476fd7bf",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "required": true,
        "unique": false,
        "description": "Content of the blog",
        "comment": "",
        "hashed": false,
        "type": "TEXT",
        "slug": "content",
        "name": "content",
        "createdAt": "2024-06-25T23:12:15.521Z",
        "updatedAt": "2024-06-27T12:16:07.663Z"
    },
    {
        "_id": "667d5807d22974bb76878353",
        "slug": "editor",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "comment": "",
        "description": "Json of the blog",
        "hashed": false,
        "name": "editor",
        "required": true,
        "type": "OBJECT",
        "unique": false,
        "updatedAt": "2024-06-27T12:16:07.663Z"
    },
    {
        "_id": "667d5807d22974bb76878358",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "slug": "array",
        "comment": "",
        "description": "array of the blog",
        "hashed": false,
        "name": "array",
        "required": true,
        "type": "ARRAY",
        "unique": false,
        "updatedAt": "2024-06-27T12:16:07.663Z"
    },
    {
        "_id": "667d5807d22974bb76878354",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "slug": "bool",
        "comment": "",
        "description": "bool of the blog",
        "hashed": false,
        "name": "bool",
        "required": true,
        "type": "BOOLEAN",
        "unique": false,
        "updatedAt": "2024-06-27T12:16:07.663Z"
    },
    {
        "_id": "667d5807d22974bb76878355",
        "recordSpace": "667b4ecf41e5f398476fd7bd",
        "slug": "obj",
        "comment": "",
        "description": "obj of the blog",
        "hashed": false,
        "name": "obj",
        "required": true,
        "type": "OBJECT",
        "unique": false,
        "updatedAt": "2024-06-27T12:16:07.663Z"
    }
]

const view = [
    {
        "name": "title",
        "type": "text",
        "required": true,
        "label": "title"
    },
    {
        "name": "content",
        "type": "text",
        "required": true,
        "label": "content"
    },
    {
        "name": "editor",
        "type": "object",
        "required": true,
        "label": "editor"
    },
    {
        "name": "array",
        "type": "array",
        "required": true,
        "label": "array"
    },
    {
        "name": "bool",
        "type": "checkbox",
        "required": true,
        "label": "bool"
    },
    {
        "name": "obj",
        "type": "object",
        "required": true,
        "label": "obj"
    }
];

const getType = (structureType: string) => {
  return structureType === "TEXT"
                ? "text"
                : structureType === "BOOLEAN"
                    ? "checkbox"
                    : structureType === "ARRAY"
                        ? "array"
                        : structureType === "OBJECT"
                            ? "object"
                            : structureType === "EDITOR"
                                ? "editor"
                                : structureType === "NUMBER"
                                    ? "number"
                                    : "number";
} 
for (let i = 0; i < fields.length; i++) { 
  const item = fields[i];
  const isInView = view.find((x) => x.name === item.name);

  if(!isInView) {
    console.log('Not in view');
  } else {
    if(isInView.type !== getType(item.type)) {
      console.log('Different types', isInView.type, getType(item.type));
      const idx = view.map(e => e.name).indexOf(isInView.name);
      
      console.log(idx, "IDX")
      // UPDATE VIEW
    }
    console.log(isInView);
  }
}