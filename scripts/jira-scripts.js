const puppeteer = require('puppeteer');
const JiraClient = require('jira-connector');

var jira = new JiraClient({
  host: 'tracker.welocalize.com'
});

jira.issue.getIssue(
  {
    issueKey: 'JWR-19'
  },
  function(error, issue) {
    console.log(issue.fields.summary);
  }
);
