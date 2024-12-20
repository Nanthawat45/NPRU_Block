// import ReactQuill from"react-quill"; 237.9k (gzipped:53.4k)
import "react-quill/default/quill.snow.css"
import { forwardRef, useRef, useImperativeHandle } from "react";

const Editor = forwardRef (({value, onChange}, ref)=>{
    const quillRef = useRef(null);
    useImperativeHandle(ref, ()=>({
        getQuill: ()=>{
            return quillRef.current.getEditor()
        }
    }))
    const toolbarOption=[

];
    const modules = {
        toolbar: toolbarOption,
    };
    require(
        <div className="constent h-full max-h-screen overflowy-y"></div>
    )
})



