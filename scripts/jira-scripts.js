const puppeteer = require('puppeteer');
const JiraClient = require('jira-connector');
const jiraAuth = require('../auth.js');

const jira = new JiraClient({
  host: 'tracker.welocalize.com',
  basic_auth: {
    username: jiraAuth.username,
    password: jiraAuth.password
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
