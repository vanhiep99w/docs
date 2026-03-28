#!/usr/bin/env node

/**
 * Prepare content from multiple submodule repos for Fumadocs.
 *
 * Sources:
 *   aws-learn/        → content/docs/aws/{category}/{file}
 *   microservice-learn/ → content/docs/microservices/{section}/{file}
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const docsBase = join(ROOT, 'content', 'docs');

// ─────────────────────────────────────────────────────────────
// AWS-LEARN
// ─────────────────────────────────────────────────────────────

const AWS_SECTION_TO_DIR = {
  'Fundamentals': 'fundamentals',
  'Compute': 'compute',
  'Storage': 'storage',
  'Database': 'database',
  'Migration': 'migration',
  'Data Integration': 'data-integration',
  'Analytics': 'analytics',
  'Networking': 'networking',
  'Account Management': 'account-management',
  'Security': 'security',
  'Partner & Marketplace': 'partner-marketplace',
  'Monitoring & Management': 'monitoring-management',
  'Developer Tools': 'developer-tools',
  'Infrastructure as Code': 'iac',
  'Messaging & Streaming': 'messaging-streaming',
  'Global Applications Architecture': 'global-architecture',
  'Cost Management': 'cost-management',
  'Support': 'support',
  'AI/ML Services': 'ai-ml',
  'End User Computing': 'end-user-computing',
  'Application Integration': 'application-integration',
};

function processAwsLearn() {
  const awsRoot = join(ROOT, 'aws-learn');
  const readme = readFileSync(join(awsRoot, 'README.md'), 'utf8');
  const lines = readme.split('\n');

  const fileMap = new Map();
  let currentSection = null;
  let orderInSection = 0;

  for (const line of lines) {
    const sectionMatch = line.match(/^## (.+)$/);
    if (sectionMatch) {
      const name = sectionMatch[1].trim();
      currentSection = AWS_SECTION_TO_DIR[name] ? name : null;
      orderInSection = 0;
      continue;
    }
    if (!currentSection) continue;

    const entryMatch = line.match(/^- \[x\] \[(.+?)\]\((.+?\.md)\)\s*-\s*(.+)$/);
    if (entryMatch) {
      orderInSection++;
      const [, title, filename, description] = entryMatch;
      fileMap.set(filename, {
        dir: AWS_SECTION_TO_DIR[currentSection],
        title,
        description: description.trim(),
        order: orderInSection,
      });
    }
  }

  // Build link rewrite map: filename.md → /aws/{dir}/{slug}/
  const linkMap = new Map();
  for (const [filename, meta] of fileMap) {
    linkMap.set(filename, `/aws/${meta.dir}/${basename(filename, '.md')}/`);
  }

  for (const [filename, meta] of fileMap) {
    const srcPath = join(awsRoot, filename);
    if (!existsSync(srcPath)) {
      console.warn(`  SKIP (not found): aws-learn/${filename}`);
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');

    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : meta.title;

    content = content.replace(/\n## Mục lục\n[\s\S]*?\n---\n/, '\n');
    content = content.replace(
      /\[([^\]]+)\]\(\.?\/?([a-z][a-z0-9\-]*\.md)\)/g,
      (match, text, linkedFile) => linkMap.get(linkedFile) ? `[${text}](${linkMap.get(linkedFile)})` : match
    );

    const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndescription: "${meta.description.replace(/"/g, '\\"')}"\n---`;
    content = content.replace(/^# .+\n+/, '');
    const finalContent = frontmatter + '\n\n' + content.trimStart();

    const targetDir = join(docsBase, 'aws', meta.dir);
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(join(targetDir, filename.replace(/.*\//, '')), finalContent, 'utf8');
    console.log(`  ✓ aws/${meta.dir}/${filename}`);
  }

  // meta.json per category
  for (const [sectionName, dir] of Object.entries(AWS_SECTION_TO_DIR)) {
    const categoryDir = join(docsBase, 'aws', dir);
    if (existsSync(categoryDir)) {
      writeFileSync(join(categoryDir, 'meta.json'), JSON.stringify({ title: sectionName }, null, 2), 'utf8');
    }
  }

  // meta.json for aws root
  writeFileSync(join(docsBase, 'aws', 'meta.json'), JSON.stringify({ title: 'AWS' }, null, 2), 'utf8');
  console.log(`AWS: ${fileMap.size} files processed`);
}

// ─────────────────────────────────────────────────────────────
// MICROSERVICE-LEARN
// ─────────────────────────────────────────────────────────────

const MS_SECTION_TO_DIR = {
  '1. Khái niệm cơ bản': 'basics',
  '2. Communication & Integration': 'communication',
  '3. Data Management': 'data-management',
  '4. Resilience & Reliability': 'resilience',
  '5. Observability & Evolvability': 'observability',
  '6. Deployment & Infrastructure': 'deployment',
  '7. Security': 'security',
  '8. Configuration Management': 'configuration',
  '9. Design Patterns tổng hợp': 'patterns',
  '10. Triển khai Microservice trên AWS': 'aws',
  '11. Case Study — Thiết kế kiến trúc Microservice từ đầu': 'case-studies',
  '12. Cheat Sheet & Tham khảo nhanh': 'reference',
  '12. Chủ đề nâng cao': 'advanced',
};

const MS_SECTION_LABELS = {
  'basics': 'Khái niệm cơ bản',
  'communication': 'Communication & Integration',
  'data-management': 'Data Management',
  'resilience': 'Resilience & Reliability',
  'observability': 'Observability & Evolvability',
  'deployment': 'Deployment & Infrastructure',
  'security': 'Security',
  'configuration': 'Configuration Management',
  'patterns': 'Design Patterns',
  'aws': 'Triển khai trên AWS',
  'case-studies': 'Case Studies',
  'reference': 'Cheat Sheet',
  'advanced': 'Chủ đề nâng cao',
};

function processMicroserviceLearn() {
  const msRoot = join(ROOT, 'microservice-learn');
  const readme = readFileSync(join(msRoot, 'README.md'), 'utf8');
  const lines = readme.split('\n');

  const fileMap = new Map();
  let currentDir = null;
  let orderInSection = 0;

  for (const line of lines) {
    // Section headers: ## 1. Khái niệm cơ bản
    const sectionMatch = line.match(/^## (.+)$/);
    if (sectionMatch) {
      const name = sectionMatch[1].trim();
      currentDir = MS_SECTION_TO_DIR[name] ?? null;
      orderInSection = 0;
      continue;
    }
    if (!currentDir) continue;

    // Table rows: | 01 | [Title](file.md) | Description | ✅ |
    const tableMatch = line.match(/^\|\s*\d+\s*\|\s*\[(.+?)\]\((.+?\.md)\)\s*\|\s*(.+?)\s*\|/);
    if (tableMatch) {
      orderInSection++;
      const [, title, filename, description] = tableMatch;
      if (!fileMap.has(filename)) {
        fileMap.set(filename, {
          dir: currentDir,
          title: title.trim(),
          description: description.replace(/[|✅⬜🟡]/g, '').trim(),
          order: orderInSection,
        });
      }
    }
  }

  // Link rewrite map: filename.md → /microservices/{dir}/{slug}/
  const linkMap = new Map();
  for (const [filename, meta] of fileMap) {
    linkMap.set(filename, `/microservices/${meta.dir}/${basename(filename, '.md')}/`);
  }

  for (const [filename, meta] of fileMap) {
    const srcPath = join(msRoot, filename);
    if (!existsSync(srcPath)) {
      console.warn(`  SKIP (not found): microservice-learn/${filename}`);
      continue;
    }

    let content = readFileSync(srcPath, 'utf8');

    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : meta.title;

    content = content.replace(/\n## Mục lục\n[\s\S]*?\n---\n/, '\n');
    content = content.replace(
      /\[([^\]]+)\]\(\.?\/?([0-9a-z][a-z0-9\-]*\.md)\)/g,
      (match, text, linkedFile) => linkMap.get(linkedFile) ? `[${text}](${linkMap.get(linkedFile)})` : match
    );

    const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndescription: "${meta.description.replace(/"/g, '\\"')}"\n---`;
    content = content.replace(/^# .+\n+/, '');
    const finalContent = frontmatter + '\n\n' + content.trimStart();

    const targetDir = join(docsBase, 'microservices', meta.dir);
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(join(targetDir, filename.replace(/.*\//, '')), finalContent, 'utf8');
    console.log(`  ✓ microservices/${meta.dir}/${filename}`);
  }

  // meta.json per section
  for (const [dir, label] of Object.entries(MS_SECTION_LABELS)) {
    const sectionDir = join(docsBase, 'microservices', dir);
    if (existsSync(sectionDir)) {
      writeFileSync(join(sectionDir, 'meta.json'), JSON.stringify({ title: label }, null, 2), 'utf8');
    }
  }

  // meta.json for microservices root
  writeFileSync(join(docsBase, 'microservices', 'meta.json'), JSON.stringify({ title: 'Microservices' }, null, 2), 'utf8');
  console.log(`Microservices: ${fileMap.size} files processed`);
}

// ─────────────────────────────────────────────────────────────
// RUN
// ─────────────────────────────────────────────────────────────

mkdirSync(join(docsBase, 'aws'), { recursive: true });
mkdirSync(join(docsBase, 'microservices'), { recursive: true });

console.log('\n=== AWS Learn ===');
processAwsLearn();

console.log('\n=== Microservice Learn ===');
processMicroserviceLearn();

console.log('\nDone! Files written to content/docs/');
