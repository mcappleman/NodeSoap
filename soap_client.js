var soap = require('soap');
var url = 'http://uslmamcapplema3:8181/ws/Jira?wsdl';

var ticket_due_date = new Date();
var user_email = 'shmomin@deloitte.com';
var ticket_summary = 'Test from local NodeJS script 2.0';
var ticket_description = 'Sample Description\nTest from local NodeJS script\nShoaib Spam';
var ticket_priority = '';
var project_name = 'Robotics and Cognitive Automation (USDCRCA)';
var issue_type = 'Help Desk';
var component = 'Innovathon';

var args = {
    bpInstance: 'auto',
    Email: user_email,
    Summary: ticket_summary,
    Description: ticket_description,
    Priority: ticket_priority,
    DueDate: ticket_due_date.toUTCString(),
    Project: project_name,
    IssueType: issue_type,
    Component: component
};
var username = 'shoaib';
var password = 'Test1234';

soap.createClientAsync(url).then((client) => {
    client.setSecurity(new soap.BasicAuthSecurity(username, password));
    return client.CreateTicketAsync(args);
}).then((result) => {
    console.log(result)
});