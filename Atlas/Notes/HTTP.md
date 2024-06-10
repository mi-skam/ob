---
parent: "[[Fleeting MOC]]"
created: 2024-02-07
tags: 2024-02-07T18:48:19+01:00
---

## Requests

| HTTP Method | Description                                                |
| ----------- | ---------------------------------------------------------- |
| GET         | The client requests a resource on the web server.          |
| POST        | The client submits data to a resource on the web server.   |
| PUT         | The client replaces a resource on the web server.          |
| DELETE      | The client deletes a resource on the web server.           |
| PATCH       | The client partially updates a resource on the web server. |

![[Pasted image 20240207184042.png]]

### Headers

```
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```

- The **Host** header specifies the host of the server and indicates where the resource is requested from.
- The **User-Agent** header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.
- The ** Accept** header informs the web server what type of content the client will accept as the response.
- The **Accept-Language** header indicates the language and optionally the locale that the client prefers.
- The **Content-type** header indicates the type of content being transmitted in the request body.

_Examples_

```
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```

```
PUT /users/1 HTTP/1.1
Host: example.com
Content-type: text/json

{"key1":"value1"}
```

## Response

When the web server is finished processing the HTTP request, it will send back an HTTP response.

The first line of the response is the status line. This line shows the client if the request was successful or if an error occurred.

`HTTP/1.1 200 OK`

![[Pasted image 20240207184102.png]]

[[HTTP-Statuscodes]]

### Headers

```
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

- The **Date** header specifies the date and time the HTTP response was generated.
- The **Server** header describes the web server software used to generate the response.
- The **Content-Length** header describes the length of the response.
- The **Content-Type** header describes the media type of the resource returned (e.g. HTML document, image, video).
