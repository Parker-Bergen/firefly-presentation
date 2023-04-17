function findVideoType(path: string) {
  const fileType = path.substring(path.indexOf("."));

  if (fileType === "mp4" || fileType === "ogg" || fileType === "webm") {
    return fileType;
  }
  return false;
}

export { findVideoType };
