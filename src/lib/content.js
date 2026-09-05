import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMarkdownDir(dirName) {
  const dirPath = path.join(CONTENT_DIR, dirName);
  const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dirPath, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, ...fixImagePaths(data), content };
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

function readMarkdownFile(fileName) {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...fixImagePaths(data), content };
}

function fixImagePaths(data) {
  const fixed = { ...data };
  // Strip /public/ prefix from image paths (Decap CMS bug workaround)
  if (fixed.image && typeof fixed.image === 'string') {
    fixed.image = fixed.image.replace(/^\/public\//, '/');
  }
  return fixed;
}

export function getHomepageData() {
  return readMarkdownFile("homepage.md");
}

export function getLocations() {
  return readMarkdownFile("locations.md");
}

export function getAllWoods() {
  return readMarkdownDir("woods");
}

export function getAllContacts() {
  return readMarkdownDir("contacts");
}
