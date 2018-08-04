const puppeteer = require('puppeteer');
const request = require('request');
const JiraClient = require('jira-connector');
const fs = require('fs');
const { jiraAuth1 } = require('../auth.js');

/**
 * @param {object} object of jiraData
 */

const writeOutputToFile = jiraData => {
  const content = JSON.stringify(jiraData);
  fs.writeFileSync(
    './output/jiraOutput.json',
    content,
    'utf8',
    err => {
      if (err) throw err;
      console.log('File was saved');
    }
  );
};

//Handles jira instance authentication from auth.js object
//Note: you must provide your own authentication information
const jira = new JiraClient({
  host: 'tracker.welocalize.com',
  basic_auth: {
    username: jiraAuth1.username,
    password: jiraAuth1.password
  }
});

jira.issue.getIssue(
  {
    issueKey: 'HCL-25'
  },
  function(error, issue) {
    console.log(issue.fields.summary);
  }
);
//Takes a JQL Filter and returns object with related Issues
jira.search.search(
  {
    jql:
      'project = GOOGLE AND "Google Falcon ID" = GOOGLE_1707_11518_Multimedia_review'
  },
  (error, issue) => {
    if (error) throw err;
    writeOutputToFile(issue);
    console.log(jqlOutput);
    console.log(issue);
  }
);

jira.attachment.getAttachment(
  {
    attachmentId: 'HCL-25'
  },
  function(error, attachment) {
    console.log(attachment);
  }
);
