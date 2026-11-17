import { legalDocuments } from '../site.config.mjs';

// The app's immutable Markdown includes a title/version. On the website those
// are rendered by LegalDocumentHeader. Omit only those two presentation nodes;
// raw imports and the hashed source/bundle bytes are never changed.
export default function codeWorkroomMasthead() {
  return (tree, file) => {
    const source = String(file.path ?? '').replaceAll('\\', '/');
    const doc = [legalDocuments.codeWorkroomPrivacy, legalDocuments.codeWorkroomTerms]
      .find((entry) => source.endsWith(entry.sourcePath));
    if (!doc) return;
    const [heading, version] = tree.children;
    const text = (node) => node?.children?.map((child) => child.value ?? '').join('');
    if (heading?.type !== 'heading' || heading.depth !== 1 ||
        !text(heading).startsWith('Code Workroom IDE — ') ||
        version?.type !== 'paragraph' || !text(version).startsWith(`Version ${doc.version} · Effective `)) {
      throw new Error('Code Workroom IDE canonical masthead changed; review its website rendering.');
    }
    tree.children.splice(0, 2);
  };
}
