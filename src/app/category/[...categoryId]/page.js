import React from "react";

export default function CategoryDetail({ params }) {
  console.log("🚀 ~ file: page.js:4 ~ CategoryDetail ~ params:", params); // Ex: URL(/post/1/blue/abc) => { params: { categoryId: ['1', 'blue', 'abc'] }, searchParams }
  return <div>CategoryDetail</div>;
}
