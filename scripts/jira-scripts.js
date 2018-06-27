const puppeteer = require("puppeteer");
const request = require("request");
const JiraClient = require("jira-connector");
const { jiraAuth1 } = require("../auth.js");

const jira = new JiraClient({
  host: "tracker.welocalize.com",
  basic_auth: {
    username: jiraAuth1.username,
    password: jiraAuth1.password
  }
});

jira.issue.getIssue(
  {
    issueKey: "HCL-25"
  },
  function(error, issue) {
    console.log(issue.fields.summary);
  }
);

jira.search.search(
  {
    jql:
      'project = GOOGLE AND "Google Falcon ID" = GOOGLE_1707_11518_Multimedia_review'
  },
  (error, issue) => {
    console.log(
      issue.fields.issueKey,
      issue.fields.issuetype.name,
      issue.fields.summary,
      issue.fields.status.name,
      issue.fields.resolution.name,
      issue.fields.labels
    );
  }
);

// jira.attachment.getAttachment(
//   {
//     attachmentId: 'HCL-25'
//   },
//   function(error, attachment) {
//     console.log(attachment);
//   }
// );
