# Service Mocks

## Goal

Your goal is to learn how to copy data from one page and paste it on another page. You'll also learn how to fill in forms.

## Steps

1. Learn how to use Random User Generator http://randomuser.me/
2. Retrieve information for 5 random users using CasperJS
3. For each user, paste raw JSON data to http://www.mocky.io/ and generate mocky.io url
4. Print all 5 mocky.io links in console. Make sure they all work correctly

## Tips

1. You can use CasperJS API to retrieve page text
2. Alternatively you can use `Casper.prototype.evaluate` and type JavaScript like if you typed in the browser's console

## Key Learnings

You'll learn how to transfer data from one page to another and how to fill in forms using CasperJS. You may find it useful when creating mock services that will be used by your integration/unit tests.