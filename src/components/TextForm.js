import React, { useState } from "react";

export default function TextForm(props) {
  const convertToUpper = () => {
    const preview = document.getElementById("text-preview");
    preview.textContent = text.toUpperCase();
  };

  const convertToLower = () => {
    const preview = document.getElementById("text-preview");
    preview.textContent = text.toLowerCase();
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    const preview = document.getElementById("text-preview");
    preview.textContent = newText;
  };

  const boldText = () => {
    const preview = document.getElementById("text-preview");
    preview.textContent = text;
    preview.style.fontWeight = 800;
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Text copied to clipboard");
  };

  const trimText = () => {
    let newText = text.split(/[ \n]+/);
    newText = newText.join(" ");
    setText(newText);
    const preview = document.getElementById("text-preview");
    preview.textContent = newText;
  };

  const handleOnChange = (event) => setText(event.target.value);

  const wordCount = (words) => {
    return words.split(/\s+/).filter((word) => word.length > 0).length;
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading1}</h3>
        <div className="my-4">
          <textarea
            className="form-control"
            id="myBox"
            placeholder="Enter any text"
            value={text}
            onChange={handleOnChange}
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "#525456" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-4 my-1"
          onClick={convertToUpper}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-4 my-1"
          onClick={convertToLower}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-4 my-1"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-4 my-1"
          onClick={boldText}
        >
          Bold
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary me-4 my-1"
          onClick={copyText}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={trimText}
        >
          Trim
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="mb-3">{props.heading2}</h3>
        <p style={{ fontSize: "14px" }}>
          {wordCount(text)} words and {text.length} characters till now
        </p>
        <p style={{ fontSize: "14px" }}>
          Average Reading time : {(wordCount(text) * 0.008).toFixed(2)} min
        </p>
        <h3 className="mt-4 mb-3">Text Preview</h3>
        <p style={{ fontSize: "14px" }} id="text-preview">
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
