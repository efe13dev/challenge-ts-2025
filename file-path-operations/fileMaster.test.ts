import { describe, expect, test } from "bun:test";

import { FileMaster } from "./fileMaster";

describe("FileMaster", () => {
  test("debe extraer correctamente la extensión, nombre y directorio", () => {
    const fm = new FileMaster("/Users/person1/Pictures/house.png");

    expect(fm.extension()).toBe("png");
    expect(fm.filename()).toBe("house");
    expect(fm.dirpath()).toBe("/Users/person1/Pictures/");
  });

  test("debe manejar rutas con backslashes", () => {
    const fm = new FileMaster("C:\\Users\\person1\\Documents\\file.txt");

    expect(fm.extension()).toBe("txt");
    expect(fm.filename()).toBe("file");
    expect(fm.dirpath()).toBe("C:\\Users\\person1\\Documents\\");
  });

  test("debe manejar archivos sin extensión", () => {
    const fm = new FileMaster("/home/user/document");

    expect(fm.extension()).toBe("");
    expect(fm.filename()).toBe("document");
    expect(fm.dirpath()).toBe("/home/user/");
  });

  test("debe manejar archivos en directorio raíz", () => {
    const fm = new FileMaster("/file.txt");

    expect(fm.extension()).toBe("txt");
    expect(fm.filename()).toBe("file");
    expect(fm.dirpath()).toBe("/");
  });

  test("debe manejar archivos con múltiples puntos en el nombre", () => {
    const fm = new FileMaster("/path/to/my.file.name.tar.gz");

    expect(fm.extension()).toBe("gz");
    expect(fm.filename()).toBe("my.file.name.tar");
    expect(fm.dirpath()).toBe("/path/to/");
  });

  test("debe manejar rutas relativas", () => {
    const fm = new FileMaster("./folder/image.jpg");

    expect(fm.extension()).toBe("jpg");
    expect(fm.filename()).toBe("image");
    expect(fm.dirpath()).toBe("./folder/");
  });
});
