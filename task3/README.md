# Automated RWD Testing

## Goal

Your goal is to create CLI application that takes `<url>` and space-separated screen sizes that you want to capture and then saves screenshots in current directory.

Sample Usage:

``` bash
casperjs task.js http://smashingmagazine.com 400x600 800x600 1024x768
```


## Steps

1. Write script implementation that accepts arguments
2. Make sure URL is always the first argument
3. The script should accept any number of screen resolutions
4. When no arguments were passed the script should print USAGE INFO, e.g.

``` bash
USAGE INFO
  casperjs task.js <url> <screensize> <screensize> <screensize>

  url - (...)
  screensize - (...)
```

## Tips

1. `Using the command line` is the section you may want to read in CasperJS documentation

## Key Learnings

You'll learn how to automate responsive design testing using CasperJS and construct basic CLI applications that take several parameters.