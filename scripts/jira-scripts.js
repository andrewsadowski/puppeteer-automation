const puppeteer = require('puppeteer');
const request = require('request');
const JiraClient = require('jira-connector');
const { jiraAuth1 } = require('../auth.js');

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

jira.attachment.getAttachment(
  {
    attachmentId: 'HCL-25'
  },
  function(error, attachment) {
    console.log(attachment);
  }
);
