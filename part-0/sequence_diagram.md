
%% This is a sequence diagram using Mermaid syntax
sequenceDiagram
    participant browser
    participant server 
   %%The browser sends an HTTP POST request to the server to create a new note
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    %% The server responds with an HTTP status code 302 (Found), redirecting the browser
    server-->>browser: HTTP 302 Found
    deactivate server

    Note right of browser:The browser follows the redirect and sends an HTTP GET request to fetch the notes page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    %% The server responds with the HTML document
    server-->>browser: HTML document
    deactivate server

    %% The browser sends an HTTP GET request to fetch the CSS file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    %% The server responds with the CSS file
    server-->>browser: CSS file
    deactivate server

    %% The browser sends an HTTP GET request to fetch the JavaScript file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    %% The server responds with the JavaScript file
    server-->>browser: JavaScript file
    deactivate server

    %% The browser starts executing the JavaScript code that fetches the JSON data from the server
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    %% The browser sends an HTTP GET request to fetch the JSON data
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    %% The server responds with the JSON data
    server-->>browser: JSON data
    deactivate server

    %% The browser executes the callback function that renders the notes
    Note right of browser: The browser executes the callback function that renders the notes