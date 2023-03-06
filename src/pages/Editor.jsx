import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default function Editor(prop) {
  try {
    return (
      <div className="Editor">
        <div className="des_tour">
          <p className="tour_text">Option {prop.data} </p>
          <hr />
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={prop.value}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            let data = editor.getData()
            console.log(data);
            if(data==null||data==''){
              console.log("null");
              data=" "}
            prop.optiondata(data,prop.data,prop.ind)
          }}
        />
        <hr />
      </div>
    )
  } catch (e) {
    return 'error'
  }
}
