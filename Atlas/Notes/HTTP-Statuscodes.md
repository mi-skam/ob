---
parent: "[[HTTP]]"
date: 2024-02-07
tags:
  - 🦠
modified: 2024-02-07T18:46:32+01:00
---

_1XX Informational_

|Status Code|Reason Phrase|Description|
|---|---|---|
|100|Continue|The server received the request headers and should continue to send the request body.|
|101|Switching Protocols|The client has requested the server to switch protocols and the server has agreed to do so.|

_2XX Successful_

|Status Code|Reason Phrase|Description|
|---|---|---|
|200|OK|Standard response returned by the server to indicate it successfully processed the request.|
|201|Created|The server successfully processed the request and a resource was created.|
|202|Accepted|The server accepted the request for processing but the processing has not yet been completed.|
|204|No Content|The server successfully processed the request but is not returning any content.|

_3XX Redirection_

|Status Code|Reason Phrase|Description|
|---|---|---|
|301|Moved Permanently|This request and all future requests should be sent to the returned location.|
|302|Found|This request should be sent to the returned location.|

_4XX Client Error_

|Status Code|Reason Phrase|Description|
|---|---|---|
|400|Bad Request|The server cannot process the request due to a client error, e.g., invalid request or transmitted data is too large.|
|401|Unauthorized|The client making the request is unauthorized and should authenticate.|
|403|Forbidden|The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator.|
|404|Not Found|The server did not find the requested resource.|
|405|Method Not Allowed|The web server does not support the HTTP method used.|

_5XX Server Error_

|Status Code|Reason Phrase|Description|
|---|---|---|
|500|Internal Server Error|A generic error status code given when an unexpected error or condition occurred while processing the request.|
|502|Bad Gateway|The web server received an invalid response from the Application Server.|
|503|Service Unavailable|The web server cannot process the request.|