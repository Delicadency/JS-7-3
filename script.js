function getInputValue(node) {
  if (node.tagName === "INPUT") {
    return node.value === "" ? null : node.value;
  }
  return null;
}
