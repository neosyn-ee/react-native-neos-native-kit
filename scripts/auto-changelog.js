import { exec } from 'child_process';
import fs from 'fs';

import simpleGit from 'simple-git';

let githubRepoUrl;
// Funzione per ottenere l'URL remoto del repository
function getGitHubRepoUrl(callback) {
  simpleGit().getRemotes(true, (error, remotes) => {
    if (error) {
      console.error(`Errore durante il recupero dell'URL del repository: ${error}`);
      return;
    }

    const remoteOrigin = remotes.find(remote => remote.name === 'origin');
    if (remoteOrigin) {
      githubRepoUrl = remoteOrigin.refs.fetch.replace('git@github.com:', 'https://github.com/').replace('.git', '');
      console.log('githubRepoUrl', githubRepoUrl);
      callback(githubRepoUrl);
    } else {
      console.error('Errore: Repository "origin" non trovato nella configurazione Git.');
    }
  });
}

// Funzione per ottenere l'ultimo tag creato
function getLastTag(callback) {
  exec('git describe --abbrev=0 --tags --always', (error, stdout, stderr) => {
    if (error) {
      console.error(`Errore durante l'esecuzione del comando Git: ${error}`);
      return;
    }
    const lastTag = stdout.trim();
    callback(lastTag);
  });
}

// Funzione per ottenere i commit tra l'ultimo tag e l'HEAD
function getCommitsSinceLastTag(lastTag, callback) {
  exec(
    `git log ${lastTag}..HEAD --grep="[JIRA-]" --pretty=format:"%h %s (%ad)" --date=short`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Errore durante l'esecuzione del comando Git: ${error}`);
        return;
      }
      const commits = stdout.split('\n');
      callback(commits);
    },
  );
}

// Funzione per generare il changelog in formato Markdown a partire dai commit
function generateChangelog(commits) {
  const changelog = {};

  commits.forEach(commit => {
    const commitParts = commit.split(' ');
    const issueNumber = commitParts[1].split('-')[1];
    const commitMessage = commitParts.slice(2).join(' ');

    if (issueNumber) {
      if (changelog[issueNumber]) {
        changelog[issueNumber].push({ message: commitMessage, commitHash: commitParts[0], date: commitParts[3] });
      } else {
        changelog[issueNumber] = [{ message: commitMessage, commitHash: commitParts[0], date: commitParts[3] }];
      }
    }
  });

  return changelog;
}

function writeChangelogToFile(changelog) {
  const markdownContent = [];

  markdownContent.push('# Changelog\n');
  markdownContent.push('## All notable changes to this project will be documented in this file.\n');

  for (const issue in changelog) {
    markdownContent.push(`## Issue JIRA-${issue}`);
    changelog[issue].forEach(commit => {
      const commitUrl = `${githubRepoUrl}/commit/${commit.commitHash}`;
      markdownContent.push(`- ${commit.message} ([${commit.commitHash}](${commitUrl}))`);
    });
  }

  fs.writeFileSync('../CHANGELOG.md', markdownContent.join('\n'));
  console.log('Changelog write on changelog.md');
}

// Esegui il processo
getGitHubRepoUrl(() => {
  getLastTag(lastTag => {
    getCommitsSinceLastTag(lastTag, commits => {
      const changelog = generateChangelog(commits);
      writeChangelogToFile(changelog);
    });
  });
});
