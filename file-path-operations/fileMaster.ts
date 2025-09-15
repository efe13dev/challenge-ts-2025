export class FileMaster {
  private filepath: string;

  constructor(filepath: string) {
    this.filepath = filepath;
  }

  extension(): string {
    const lastDotIndex = this.filepath.lastIndexOf(".");
    const lastSlashIndex = Math.max(
      this.filepath.lastIndexOf("/"),
      this.filepath.lastIndexOf("\\"),
    );

    if (lastDotIndex === -1 || lastDotIndex < lastSlashIndex) {
      return "";
    }

    return this.filepath.slice(lastDotIndex + 1);
  }

  filename(): string {
    const lastSlashIndex = Math.max(
      this.filepath.lastIndexOf("/"),
      this.filepath.lastIndexOf("\\"),
    );
    const lastDotIndex = this.filepath.lastIndexOf(".");

    const startIndex = lastSlashIndex + 1;
    const endIndex = lastDotIndex > lastSlashIndex ? lastDotIndex : this.filepath.length;

    return this.filepath.slice(startIndex, endIndex);
  }

  dirpath(): string {
    const lastSlashIndex = Math.max(
      this.filepath.lastIndexOf("/"),
      this.filepath.lastIndexOf("\\"),
    );

    if (lastSlashIndex === -1) {
      return "";
    }

    return this.filepath.slice(0, lastSlashIndex + 1);
  }
}
